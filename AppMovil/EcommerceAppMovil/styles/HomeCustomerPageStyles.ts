import { StyleSheet, Dimensions } from 'react-native';

const { width } = Dimensions.get('window');
const cardWidth = (width - 48) / 2;

const styles = StyleSheet.create({
  container: { flex: 1, width: Dimensions.get('window').width, backgroundColor: '#fff' },
  header: { flexDirection: 'row', alignItems: 'center', padding: 16, paddingTop: 10 },
  
  headerMenu: { width: Dimensions.get('window').width-35, flexDirection: 'row', justifyContent: 'space-between', alignItems:'center', padding:0, margin:0},
  userDataMenu: { flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', gap: 10 },
  imageBackGround: {width: Dimensions.get('window').width, height: Dimensions.get('window').height},

  headerText: { fontSize: 16, color: '#333' },
  promoBanner: { margin: 16, borderRadius: 16, overflow: 'hidden', height: 150 },
  promoImage: { width: '100%', height: '100%' },
  promoTag: { position: 'absolute', top: 16, left: 16, backgroundColor: '#FF4444', paddingHorizontal: 12, paddingVertical: 6, borderRadius: 12 },
  promoTagText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  promoContent: { position: 'absolute', bottom: 16, left: 16 },
  promoTitle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  categoriesContainer: { padding: 16, gap: 12 },
  categoryButton: { paddingHorizontal: 20, paddingVertical: 10, borderRadius: 20, backgroundColor: '#F5F5F5', marginRight: 8 },
  categoryButtonActive: { backgroundColor: '#C17754' },
  categoryText: { color: '#666', fontSize: 14 },
  categoryTextActive: { color: 'white' },
  coffeeGrid: { flexDirection: 'row', flexWrap: 'wrap', padding: 16, gap: 16 },
  coffeeCard: { width: cardWidth, backgroundColor: '#F5F5F5', borderRadius: 16, overflow: 'hidden' },
  coffeeImage: { width: '100%', height: cardWidth },
  ratingContainer: { flexDirection: 'row', alignItems: 'center', gap: 4, position: 'absolute', top: 8, right: 8, backgroundColor: 'rgba(0,0,0,0.5)', padding: 4, borderRadius: 12 },
  ratingText: { color: 'white', fontSize: 12, fontWeight: 'bold' },
  coffeeName: { fontSize: 16, fontWeight: 'bold', color: '#333', marginTop: 8, marginHorizontal: 12 },
  coffeeDescription: { fontSize: 14, color: '#666', marginHorizontal: 12, marginBottom: 12 },
  registerButton: { margin: 16, backgroundColor: '#333', padding: 16, borderRadius: 30 },
  registerButtonText: { color: 'white', textAlign: 'center', fontSize: 16, fontWeight: 'bold' },
});

export default styles;
