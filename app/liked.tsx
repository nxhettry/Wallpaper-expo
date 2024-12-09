import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import SplitView from '@/components/Splitview'
import { ThemedSafeArea } from '@/components/ThemedSafeArea';
import { useLikedWallpaper } from '@/hooks/useWallpaper';

const wallpapers = useLikedWallpaper();

export default function Liked() {
  return (
    <ThemedSafeArea>
      <SplitView wallpapers={wallpapers} />
    </ThemedSafeArea>
  )
}

const styles = StyleSheet.create({})