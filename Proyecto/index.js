import antlr4 from 'antlr4';
import fs from 'fs';
import FormularioLexer from './FormularioLexer.js';
import FormularioParser from './FormularioParser.js';
import FormularioVisitor from './FormularioVisitor.js';

// Leer el archivo de texto que pasemos por consola
const inputFile = process.argv[2];
if (!inputFile) {
    console.error("Error crítico: Debes proporcionar la ruta de un archivo .txt para analizar.");
    process.exit(1);
}

const input = fs.readFileSync(inputFile, 'utf8');
const chars = new antlr4.InputStream(input);
const lexer = new FormularioLexer(chars);
const tokens = new antlr4.CommonTokenStream(lexer);
const parser = new FormularioParser(tokens);

// TAREA 1: Análisis léxico y sintáctico (Interceptor de Errores)
class CustomErrorListener extends antlr4.error.ErrorListener {
    constructor() {
        super();
        this.errors = [];
    }
    syntaxError(recognizer, offendingSymbol, line, column, msg, e) {
        this.errors.push(`[Línea ${line}:${column}] Causa: ${msg}`);
    }
}

const errorListener = new CustomErrorListener();
lexer.removeErrorListeners();
lexer.addErrorListener(errorListener);
parser.removeErrorListeners();
parser.addErrorListener(errorListener);

console.log("=====================================");
console.log(`ANALIZANDO ARCHIVO: ${inputFile}`);
console.log("=====================================\n");

// Generar el árbol
const tree = parser.formulario();

if (errorListener.errors.length > 0) {
    console.log("-> RESULTADO TAREA 1: LA ENTRADA CONTIENE ERRORES");
    errorListener.errors.forEach(err => console.log(err));
} else {
    console.log("-> RESULTADO TAREA 1: LA ENTRADA ES CORRECTA\n");

    // TAREA 2: Tabla de lexemas y tokens
    console.log("--- TAREA 2: TABLA DE LEXEMAS Y TOKENS ---");
    tokens.fill();
    tokens.tokens.forEach(token => {
        if (token.type !== antlr4.Token.EOF) {
           const tokenName = (lexer.constructor.symbolicNames && lexer.constructor.symbolicNames[token.type]) || "DESCONOCIDO";
            console.log(`Lexema: '${token.text}' \t|\t Token: ${tokenName}`);
        }
    });

    // TAREA 3: Árbol de análisis sintáctico
    console.log("\n--- TAREA 3: ÁRBOL SINTÁCTICO CONCRETO ---");
    console.log(tree.toStringTree(parser.ruleNames));

    // TAREA 4: Interpretación (Traducción a JS y Ejecución)
    console.log("\n--- TAREA 4: INTERPRETACIÓN A JAVASCRIPT ---");
    class TraductorJS extends FormularioVisitor {
        visitFormulario(ctx) {
            let formName = ctx.ID().getText();
            let jsCode = `let ${formName} = {\n`;
            let campos = ctx.campo();
            for (let i = 0; i < campos.length; i++) {
                jsCode += this.visit(campos[i]) + (i < campos.length - 1 ? ',\n' : '\n');
            }
            jsCode += `};\nconsole.log("Objeto cargado en memoria:", ${formName});\n`;
            return jsCode;
        }

        visitCampo(ctx) {
            let fieldName = ctx.ID().getText();
            let value = ctx.valor() ? ctx.valor().getText() : 'null';
            if (value === 'verdadero') value = 'true';
            if (value === 'falso') value = 'false';
            return `  ${fieldName}: ${value}`;
        }
    }

    const traductor = new TraductorJS();
    const codigoJS = traductor.visit(tree);
    
    console.log("Código JavaScript Generado:");
    console.log(codigoJS);
    
    console.log("\n--- EJECUCIÓN DEL INTÉRPRETE ---");
    try {
        eval(codigoJS); 
    } catch (e) {
        console.error("Fallo durante la ejecución dinámica:", e);
    }
}