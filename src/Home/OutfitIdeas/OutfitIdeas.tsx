import React from "react"
import { View } from "react-native"
import { Header } from "../../components";
import { HomeNavigationProps } from "../../components/Navigation";
import { Box } from "../../components/Theme";
import Background from "./Background";
import Card from "./Card"

interface OutfitIdeasProps  {}

const OutfitIdeas = ( {navigation} : HomeNavigationProps<"OutfitIdeas"> ) => {
    return (
        <Box flex={1} backgroundColor="white">
        <Header
        title="Outfit Ideas"
        left={{ icon: "menu", onPress: () => true }}
        right={{ icon: "shopping-bag", onPress: () => true }}
      />
      < Box flex={1} >
          <Card />
           
      </Box>
      </Box>
    )
 
}

export default OutfitIdeas;