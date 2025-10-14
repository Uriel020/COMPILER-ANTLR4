import { CharStreams, CommonTokenStream } from "antlr4ts";
import { RedLangParser } from "../RedLangParser";
import { RedLangLexer } from "./generated/RedLangLexer";
import CompilerVisitor from "./visitors/CompilerVisitor";

const code = `
  declare x:i = 50;
  func main(): i {
  show(x);
  give x;
}
`;

//lexer stage whit char stream
const codeInput = CharStreams.fromString(code); // divide string in chars example (d - e - c - l - r - e)
const lexer = new RedLangLexer(codeInput);
const token = new CommonTokenStream(lexer);

//parser stage
const parser = new RedLangParser(token);

const tree = parser.program();

function printTree(node: any, indent: string = "") {
  console.log(indent + node.constructor.name);
  for (let i = 0; i < node.childCount; i++) {
    printTree(node.getChild(i), indent + "  ");
  }
}

const visitor = new CompilerVisitor();

visitor.visit(tree);

// if (parser.numberOfSyntaxErrors < 1) printTree(tree);
// else {
//   console.log("Hay errores");
// }

