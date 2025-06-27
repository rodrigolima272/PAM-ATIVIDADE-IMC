import { BottomTabBarButtonProps } from '@react-navigation/bottom-tabs';
import { PlatformPressable } from '@react-navigation/elements';
import * as Haptics from 'expo-haptics';
import { Platform } from 'react-native';

/**
 * Componente personalizado para botões de tab com feedback háptico
 * 
 * @param props - Todas as propriedades padrão do botão de tab
 * @returns Componente PlatformPressable com feedback tátil
 */
export function HapticTab(props: BottomTabBarButtonProps) {
  /**
   * Manipulador de pressionar com feedback háptico
   */
  const handlePressIn = (ev: any) => {
    // Feedback apenas no iOS (opcionalmente pode habilitar para Android em versões mais novas)
    if (Platform.OS === 'ios') {
      Haptics.impactAsync(Haptics.ImpactFeedbackStyle.Light)
        .catch(error => console.warn('Haptic feedback error:', error));
    }
    
    // Propaga o evento original
    props.onPressIn?.(ev);
  };

  return (
    <PlatformPressable
      {...props}
      onPressIn={handlePressIn}
      // Adiciona estilos adicionais para melhor acessibilidade
      android_ripple={{
        color: 'rgba(0, 0, 0, 0.1)',
        borderless: true,
        radius: 20
      }}
      pressRetentionOffset={{ top: 10, left: 10, right: 10, bottom: 10 }}
    />
  );
}