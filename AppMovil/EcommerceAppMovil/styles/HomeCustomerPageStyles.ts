import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 150) / 2;

const styles = StyleSheet.create({
  container: { display:'flex', justifyContent:'space-between' ,flex: 1, width: Dimensions.get('window').width, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 0},
  
  imageBackGround: { width: Dimensions.get('window').width, height: Dimensions.get('window').height },
  
  headerMenu: { backgroundColor:'#373737', width: Dimensions.get('window').width, height: 80, flexDirection: 'row', justifyContent: 'space-between', alignItems:'flex-start', padding:10, margin:0},
  userDataMenu: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  headerText: { fontSize: 16, color: '#dedede' },
  
  promoBannerContainer: { position: 'relative', width: Dimensions.get('window').width, height: 200, overflow: 'hidden', justifyContent:'center'},
  halfTop: { position: 'absolute', top: 0, left: 0, right: 0, height: '50%', backgroundColor: '#373737' },
  halfBottom: { position: 'absolute', bottom: 0, left: 0, right: 0, height: '50%', backgroundColor: '#FFF' },
  
  promoBanner: { margin: 16, borderRadius: 16, overflow: 'hidden', height: 150 },
  promoImage: { width: '100%', height: '100%' },
  promoTag: { position: 'absolute', top: 16, left: 16, backgroundColor: '#ED5151', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  promoTagText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  promoContent: { position: 'absolute', bottom: 16, left: 16 , gap:8},
  promoTitle: { width: 'auto', backgroundColor: '#373737', color: 'white', fontSize: 23, fontWeight: 'bold', paddingHorizontal: 8, paddingVertical: 0.3, borderRadius: 4, textAlign: 'center', alignSelf: 'flex-start' },
  
  categoriesContainer: { padding: 16, gap: 12 },
  categoryButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: '#F5F5F5',color: 'white', marginRight: 8 },
  categoryButtonActive: { backgroundColor: '#C17754' },
  categoryText: { color: '#666', fontSize: 14 },
  categoryTextActive: { color: 'white' },
  
  coffeeGrid: { flexDirection: 'row', height:50, flexWrap: 'wrap', padding: 30, gap: 16, justifyContent: 'space-between', alignItems: 'center', paddingBottom: 30, flexGrow: 1 },
  coffeeCard: { width: '45%', height: 'auto', backgroundColor: '#F5F5F5', borderRadius: 16, marginBottom: 16, justifyContent: 'center'},
  coffeeImage: { width: '100%', height: 150, resizeMode: 'cover', borderRadius: 16, },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', gap: 4, position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(0,0,0,0.5)', padding: 4, borderRadius: 12 },
  ratingText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  coffeeName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 8, marginHorizontal: 12 },
  coffeeDescription: { fontSize: 14, color: '#666', marginHorizontal: 12, marginBottom: 12 },
  registerButton: { margin: 16, backgroundColor: '#333', padding: 16, borderRadius: 30 },
  registerButtonText: { color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },

  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    fontSize: 16,
    color: '#888',
  },
  emptyContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emptyText: {
    fontSize: 16,
    color: '#888',
  }
});

export default styles;
