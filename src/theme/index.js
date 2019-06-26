import screen from './screen';
import print from "spectacle/lib/themes/default/print";

const styles = (colors, fonts) => ({
  screen: screen(colors, fonts),
  print: print()
});

export default styles;