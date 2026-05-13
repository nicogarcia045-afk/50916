// Generated from Formulario.g4 by ANTLR 4.9.3
// jshint ignore: start
import antlr4 from 'antlr4';
import FormularioListener from './FormularioListener.js';
import FormularioVisitor from './FormularioVisitor.js';


const serializedATN = ["\u0003\u608b\ua72a\u8133\ub9ed\u417c\u3be7\u7786",
    "\u5964\u0003\u0010#\u0004\u0002\t\u0002\u0004\u0003\t\u0003\u0004\u0004",
    "\t\u0004\u0004\u0005\t\u0005\u0003\u0002\u0003\u0002\u0003\u0002\u0003",
    "\u0002\u0007\u0002\u000f\n\u0002\f\u0002\u000e\u0002\u0012\u000b\u0002",
    "\u0003\u0002\u0003\u0002\u0003\u0003\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0003\u0003\u0005\u0003\u001b\n\u0003\u0003\u0003\u0003\u0003\u0003",
    "\u0004\u0003\u0004\u0003\u0005\u0003\u0005\u0003\u0005\u0002\u0002\u0006",
    "\u0002\u0004\u0006\b\u0002\u0004\u0003\u0002\t\u000b\u0003\u0002\f\u000e",
    "\u0002 \u0002\n\u0003\u0002\u0002\u0002\u0004\u0015\u0003\u0002\u0002",
    "\u0002\u0006\u001e\u0003\u0002\u0002\u0002\b \u0003\u0002\u0002\u0002",
    "\n\u000b\u0007\u0003\u0002\u0002\u000b\f\u0007\u000f\u0002\u0002\f\u0010",
    "\u0007\u0004\u0002\u0002\r\u000f\u0005\u0004\u0003\u0002\u000e\r\u0003",
    "\u0002\u0002\u0002\u000f\u0012\u0003\u0002\u0002\u0002\u0010\u000e\u0003",
    "\u0002\u0002\u0002\u0010\u0011\u0003\u0002\u0002\u0002\u0011\u0013\u0003",
    "\u0002\u0002\u0002\u0012\u0010\u0003\u0002\u0002\u0002\u0013\u0014\u0007",
    "\u0005\u0002\u0002\u0014\u0003\u0003\u0002\u0002\u0002\u0015\u0016\u0007",
    "\u000f\u0002\u0002\u0016\u0017\u0007\u0006\u0002\u0002\u0017\u001a\u0005",
    "\u0006\u0004\u0002\u0018\u0019\u0007\u0007\u0002\u0002\u0019\u001b\u0005",
    "\b\u0005\u0002\u001a\u0018\u0003\u0002\u0002\u0002\u001a\u001b\u0003",
    "\u0002\u0002\u0002\u001b\u001c\u0003\u0002\u0002\u0002\u001c\u001d\u0007",
    "\b\u0002\u0002\u001d\u0005\u0003\u0002\u0002\u0002\u001e\u001f\t\u0002",
    "\u0002\u0002\u001f\u0007\u0003\u0002\u0002\u0002 !\t\u0003\u0002\u0002",
    "!\t\u0003\u0002\u0002\u0002\u0004\u0010\u001a"].join("");


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.PredictionContextCache();

export default class FormularioParser extends antlr4.Parser {

    static grammarFileName = "Formulario.g4";
    static literalNames = [ null, "'formulario'", "'{'", "'}'", "':'", "'='", 
                            "';'", "'texto'", "'numero'", "'booleano'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, "BOOLEANO", "CADENA", "NUMERO", 
                             "ID", "WS" ];
    static ruleNames = [ "formulario", "campo", "tipo", "valor" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = FormularioParser.ruleNames;
        this.literalNames = FormularioParser.literalNames;
        this.symbolicNames = FormularioParser.symbolicNames;
    }

    get atn() {
        return atn;
    }



	formulario() {
	    let localctx = new FormularioContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, FormularioParser.RULE_formulario);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 8;
	        this.match(FormularioParser.T__0);
	        this.state = 9;
	        this.match(FormularioParser.ID);
	        this.state = 10;
	        this.match(FormularioParser.T__1);
	        this.state = 14;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        while(_la===FormularioParser.ID) {
	            this.state = 11;
	            this.campo();
	            this.state = 16;
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        }
	        this.state = 17;
	        this.match(FormularioParser.T__2);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	campo() {
	    let localctx = new CampoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, FormularioParser.RULE_campo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(FormularioParser.ID);
	        this.state = 20;
	        this.match(FormularioParser.T__3);
	        this.state = 21;
	        this.tipo();
	        this.state = 24;
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        if(_la===FormularioParser.T__4) {
	            this.state = 22;
	            this.match(FormularioParser.T__4);
	            this.state = 23;
	            this.valor();
	        }

	        this.state = 26;
	        this.match(FormularioParser.T__5);
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	tipo() {
	    let localctx = new TipoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, FormularioParser.RULE_tipo);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 28;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormularioParser.T__6) | (1 << FormularioParser.T__7) | (1 << FormularioParser.T__8))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	valor() {
	    let localctx = new ValorContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, FormularioParser.RULE_valor);
	    var _la = 0; // Token type
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 30;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) == 0 && ((1 << _la) & ((1 << FormularioParser.BOOLEANO) | (1 << FormularioParser.CADENA) | (1 << FormularioParser.NUMERO))) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


}

FormularioParser.EOF = antlr4.Token.EOF;
FormularioParser.T__0 = 1;
FormularioParser.T__1 = 2;
FormularioParser.T__2 = 3;
FormularioParser.T__3 = 4;
FormularioParser.T__4 = 5;
FormularioParser.T__5 = 6;
FormularioParser.T__6 = 7;
FormularioParser.T__7 = 8;
FormularioParser.T__8 = 9;
FormularioParser.BOOLEANO = 10;
FormularioParser.CADENA = 11;
FormularioParser.NUMERO = 12;
FormularioParser.ID = 13;
FormularioParser.WS = 14;

FormularioParser.RULE_formulario = 0;
FormularioParser.RULE_campo = 1;
FormularioParser.RULE_tipo = 2;
FormularioParser.RULE_valor = 3;

class FormularioContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_formulario;
    }

	ID() {
	    return this.getToken(FormularioParser.ID, 0);
	};

	campo = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(CampoContext);
	    } else {
	        return this.getTypedRuleContext(CampoContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterFormulario(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitFormulario(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitFormulario(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CampoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_campo;
    }

	ID() {
	    return this.getToken(FormularioParser.ID, 0);
	};

	tipo() {
	    return this.getTypedRuleContext(TipoContext,0);
	};

	valor() {
	    return this.getTypedRuleContext(ValorContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterCampo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitCampo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitCampo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class TipoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_tipo;
    }


	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterTipo(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitTipo(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitTipo(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ValorContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = FormularioParser.RULE_valor;
    }

	CADENA() {
	    return this.getToken(FormularioParser.CADENA, 0);
	};

	NUMERO() {
	    return this.getToken(FormularioParser.NUMERO, 0);
	};

	BOOLEANO() {
	    return this.getToken(FormularioParser.BOOLEANO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.enterValor(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof FormularioListener ) {
	        listener.exitValor(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof FormularioVisitor ) {
	        return visitor.visitValor(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




FormularioParser.FormularioContext = FormularioContext; 
FormularioParser.CampoContext = CampoContext; 
FormularioParser.TipoContext = TipoContext; 
FormularioParser.ValorContext = ValorContext; 
