import { useTheme } from "@/theme/ThemeProvider";
import { PropsWithChildren } from "react";
import { View, ViewProps } from "react-native";

interface AppViewProps extends PropsWithChildren<ViewProps> {
  className?: string;
}

export default function AppView({ children, className, style, ...props }: AppViewProps) {
  const theme = useTheme();
  
  return (
    <View 
      className={`flex-1 ${className ?? ""}`} 
      style={[style, { backgroundColor: theme.color.background }]}
      {...props}
    >
      {children}
    </View>
  );
}