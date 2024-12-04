import Type, { MaybeType } from "@/generators/Type";

export default class Interface extends Type {
  static override of(type: MaybeType) {
    return new Interface(type);
  }

  // Override
  protected override toTypeDeclaration() {
    const { name, export: export_, type: types } = this.type;
    return [export_ ? "export" : "", "interface", name, Type.toTypeLiteral(types)].join(" ");
  }
}
