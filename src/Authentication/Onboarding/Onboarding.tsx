import React, { useRef } from "react";
import { View, StyleSheet, Dimensions, Image } from "react-native";
import Slide, { SLIDE_HEIGHT } from "./Slide";
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  useAnimatedScrollHandler,
  interpolateColor,
} from 'react-native-reanimated';
import Subslide from "./Subslide"
import Dot from "./Dot"
import { AuthNavigationProps} from "../../components/Navigation";
import { theme } from "../../components";



const { width } = Dimensions.get("window")


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },
  underlay: {
    ...StyleSheet.absoluteFillObject,
    alignItems: 'center',
    justifyContent: "flex-end",
    borderBottomRightRadius: theme.borderRadii.xl,
    overflow: "hidden"
},
  slider: {
    height: SLIDE_HEIGHT,
    borderBottomRightRadius: theme.borderRadii.xl,
  },
  footer: {
    flex: 1,
  },
  footerContent: {
    flex: 1,
    backgroundColor: "white",
    borderTopLeftRadius: theme.borderRadii.xl,
  },
  pagination: {
    ...StyleSheet.absoluteFillObject,
    height: theme.borderRadii.xl,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
  }
});

const slides = [
  {
    title: "Relaxed",
    subtitle: "Find Your Outfits",
    description: "Confused about your outfit? Dont worry! Find the best outfit here!",
    color: "#BFEAF5",
    picture: {
      src: require("../assets/1.png"),
      width: 2513,
      height: 3583,
    }
  },

  {
    title: "Playful",
    subtitle: "Hear it First, Wear it First",
    description: "Hating the clothes in your wardobe? Explore hundreds of outfit ideas",
    color: "#BEECC4",
    picture: {
      src: require("../assets/2.png"),
      width: 2791,
      height: 3744,
    }
  },
  {
    title: "Excentric",
    subtitle: "Your Style, Your Way",
    description: "Create your individual & unique style and look amazing everyday",
    color: "#FFE4D9",
    picture: {
      src: require("../assets/3.png"),
      width: 2738,
      height: 3244,
    }
  },
  {
    title: "Funky",
    subtitle: "Look Good, Feel Good",
    description: "Discover the latest trends in fashion and explore your personality",
    color: "#FFDDDD",
    picture: {
      src: require("../assets/4.png"),
      width: 1757,
      height: 2551,
    }
  },
];


export const assets = slides.map((slide) => slide.picture.src);

const Onboarding = ({ 
  navigation 
}: AuthNavigationProps<"Onboarding">) => {
  const scroll = useRef<Animated.ScrollView>(null)
  const scrollY = useSharedValue(0);
  
  const scrollHandler = useAnimatedScrollHandler({
    onScroll: (e) => {
      scrollY.value = e.contentOffset.x;
    },
  });

  const animatedStyles = useAnimatedStyle(() => {
    const scale = interpolateColor(
      scrollY.value,
      slides.map((_, i) => i * width),
      slides.map(slide => slide.color),
    );

    return {
      backgroundColor: scale,
    };
  });

  const translateX = useAnimatedStyle(() => {

    return {
      transform: [{ translateX: -scrollY.value }]
    };
  });



  return (
    <View style={styles.container}>
      <Animated.View style={[styles.slider, animatedStyles]}>
        {slides.map(({picture }, index) => {
          return (
            <Animated.View style={styles.underlay} key={index}>
            <Image source={picture.src} 
            style={{ 
                ...StyleSheet.absoluteFillObject, 
                justifyContent: 'center',
                alignItems: "center",
                width: width - theme.borderRadii.xl,
                height: (( width - theme.borderRadii.xl ) * picture.height) / picture.width,
                }} 
                />
        </Animated.View>
          );
        })}
      
        
        <Animated.ScrollView horizontal
          ref={scroll}
          snapToInterval={width}
          decelerationRate="fast"
          showsHorizontalScrollIndicator={false}
          bounces={false}
          onScroll={scrollHandler}
        >
          {slides.map(({ title, picture }, index) => (
            <Slide key={index} right={!!(index % 2)} {...{ title, picture }} />
          ))}
        </Animated.ScrollView>
      </Animated.View>
      <View style={styles.footer}>
        <Animated.View style={[{ ...StyleSheet.absoluteFillObject }, animatedStyles]} />
        
        <View style={styles.footerContent}>
          <View style={styles.pagination}>
          {slides.map((_, index) => (
          <Dot key={index} 
          paging={scrollY}
          // currentIndex={scrollY.value/width} 
          {...{ index}} />))}  
           </View>
           <Animated.View
           style={[
            {
              flex: 1,
              flexDirection: "row",
              width: width * slides.length,
            },
        translateX
        ]}>
           {slides.map(({ subtitle, description }, index) => {
             const last = index === slides.length - 1;
             return (
                <Subslide
                  onPress={() => {
                    if (last) {
                      navigation.navigate("Welcome")
                    } else {
                      scroll.current
                        .scrollTo
                        ({ x: width * (index + 1), animated: true });
                    }
                  }}
                  key={index}
                  {...{ subtitle, description, last }}
                />
             )
           })}
           </Animated.View>
        </View>
      </View>
    </View>
  );
};


export default Onboarding;
