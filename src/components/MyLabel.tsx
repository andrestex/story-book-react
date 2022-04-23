import './myLabel.css'


export interface MyLabelProps {
   /**
   * Representa el texto ha mostrar, es requerido.
   */
  label: string;
  /**
   * Representa el tamaño en pixeles del texto ha mostrar, por defecto 'normal'
   */
  size?: 'normal'| 'h1' | 'h2' |'h3';
  /**
   * Indica si el texto estara Capitalizado
   */
  allCaps?: boolean;
  /**
   * Repesenta el color del texto
   */
  color?: 'primary' | 'secondary' | 'tertiary';
    /**
   * Repesenta el color personalizado del texto
   */
  fontColor?: string;
}

const MyLabel = ({label, size = 'normal', allCaps = false, color = 'primary', fontColor}: MyLabelProps) => {
  return (
    <span className={`${size} text-${color} label`} style={{ textTransform: allCaps ? 'capitalize' : 'none', color: fontColor ? fontColor : ''}}>{label}</span>
  )
}

export default MyLabel