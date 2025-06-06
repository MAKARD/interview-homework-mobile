import { Stack } from 'expo-router';

export default function Layout() {
  return (
    <Stack screenOptions={{ headerShown: false }} >
      <Stack.Screen
        name="[warehouseId]/product/create"
        options={{
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name="[warehouseId]/product/[productId]/delete"
        options={{
          presentation: 'transparentModal',
        }}
      />
      <Stack.Screen
        name="[warehouseId]/product/[productId]/edit"
        options={{
          presentation: 'transparentModal',
        }}
      />
    </Stack>
  );
}
