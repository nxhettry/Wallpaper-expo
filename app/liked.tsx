import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplitView from '@/components/Splitview'
import { useWallpaper } from '@/hooks/useWallpaper'
import { ThemedSafeArea } from '@/components/ThemedSafeArea';

const wallpapers = useWallpaper();

export default function Liked() {
  return (
    <ThemedSafeArea>
      <SplitView wallpapers={wallpapers} />
    </ThemedSafeArea>
  )
}

const styles = StyleSheet.create({})