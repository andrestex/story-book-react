/// <reference types="react" />
import './myLabel.css';
export interface MyLabelProps {
    /**
    * Representa el texto ha mostrar, es requerido.
    */
    label: string;
    /**
     * Representa el tamaño en pixeles del texto ha mostrar, por defecto 'normal'
     */
    size?: 'normal' | 'h1' | 'h2' | 'h3';
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
export declare const MyLabel: ({ label, size, allCaps, color, fontColor }: MyLabelProps) => JSX.Element;
