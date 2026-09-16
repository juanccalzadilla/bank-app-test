import { useEffect } from "react";
import { DimensionValue } from "react-native";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withRepeat,
  withTiming,
  Easing,
  interpolateColor,
} from "react-native-reanimated";

interface AppSkeletonProps {
  width: DimensionValue;
  height: DimensionValue;
  borderRadius?: number;
}

export function AppSkeleton({ width, height, borderRadius = 8 }: AppSkeletonProps) {
  const progress = useSharedValue(0);

  useEffect(() => {
    progress.value = withRepeat(
      withTiming(1, { duration: 1000, easing: Easing.inOut(Easing.ease) }),
      -1,
      true,
    );
  }, []);

  const animatedStyle = useAnimatedStyle(() => ({
    backgroundColor: interpolateColor(
      progress.value,
      [0, 1],
      ["#e2e8f0", "#f8fafc"],
    ),
  }));

  return (
    <Animated.View
      style={[{ width, height, borderRadius }, animatedStyle]}
    />
  );
}
