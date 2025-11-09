import { View, Image, ScrollView, StyleSheet } from 'react-native';
import FirstOne from '../components/firstone';
import Second from '../components/second';
import Cards from '../components/cards';
import Line from '../components/Line';
import SmallCard from '../components/smallCard';
import LastOne from '../components/lastone';

export default function Index() {
  return (
    <ScrollView style={styles.scrollView} contentContainerStyle={styles.contentContainer}>
      <Image
        style={styles.backgroundImage}
        source={require('../assets/imgs/image.png')}
        resizeMode="cover"
      />
      <View style={styles.mainContainer}>
        <FirstOne />
        <Second />
        <View style={styles.cardsContainer}>
          <Cards img={require('../assets/imgs/img1.png')} nav={true} />
          <Cards img={require('../assets/imgs/img2.png')} />
        </View>
        <Line w={330} />
        <View style={styles.smallCardsWrapper}>
          <View style={styles.leftColumn}>
            <SmallCard img={require('../assets/icondatabase.png')} text="ARchain DATA" />
            <SmallCard img={require('../assets/database-fill-check.png')} text="Simpl DATA" />
          </View>

          <View style={styles.centerColumn}>
            <SmallCard
              img={require('../assets/Mode_Isolation.png')}
              text=""
              imgSize={{ width: 40, height: 40 }}
            />
          </View>

          <View style={styles.rightColumn}>
            <SmallCard img={require('../assets/Vector.png')} text="Workflow" />
            <SmallCard img={require('../assets/Group.png')} text="Bdd ARF" />
          </View>
        </View>
        <Line w="100%" />
        <LastOne />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#F6F8F9',
  },
  contentContainer: {
    flexGrow: 1,
  },
  backgroundImage: {
    position: 'absolute',
    zIndex: 0,
    height: 364,
    width: '100%',
    borderBottomLeftRadius: 43,
    borderBottomRightRadius: 43,
  },
  mainContainer: {
    position: 'relative',
    zIndex: 10,
  },
  cardsContainer: {
    marginBottom: 20,
    marginTop: 230,
    flexDirection: 'row',
    justifyContent: 'center',
    gap: 20,
    paddingHorizontal: 20,
  },
  smallCardsWrapper: {
  flexDirection: 'row',
  alignItems: 'flex-start',
  justifyContent: 'center',
  paddingHorizontal: 40, 
},
leftColumn: {
  width: '33.333%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: 16,
},
centerColumn: {
  width: '33.333%',
  flexDirection: 'column',
  justifyContent: 'center',
  marginVertical: 'auto',
},
rightColumn: {
  width: '33.333%',
  flexDirection: 'column',
  justifyContent: 'space-between',
  rowGap: 16,
},
});