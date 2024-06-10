import { HashMap } from "./hashMap.js";
import { HashSet } from "./hashSet.js";


const hashMap = new HashMap();
hashMap.set("name", "Bogdan");
hashMap.set("a", "Bogdan");
hashMap.set("sadasd", "Bogdan");
hashMap.set("asdada", "Bogdan");
hashMap.set("namei", "Salut");
hashMap.set("name", "Bogdan");
hashMap.set("age", 25);
hashMap.set("city", "New York");
hashMap.set("job", "Engineer");
hashMap.set("hobby", "Reading");
hashMap.set("language", "JavaScript");
hashMap.set("color", "Blue");
hashMap.set("fruit", "Banana");
hashMap.set("car", "Tesla");
hashMap.set("animal", "Lion");
hashMap.set("sport", "Soccer");
hashMap.set("music", "Classical");
hashMap.set("movie", "Inception");
hashMap.set("book", "The Great Gatsby");
hashMap.set("country", "Japan");
hashMap.set("drink", "Coffee");
hashMap.set("programming", "Python");
hashMap.set("school", "MIT");
hashMap.set("subject", "Physics");
hashMap.set("team", "Lakers");
hashMap.set("computer", "MacBook");
hashMap.set("game", "Chess");
hashMap.set("holiday", "Christmas");
hashMap.set("weather", "Sunny");
hashMap.set("food", "Pizza");
hashMap.set("emotion", "Happy");
hashMap.set("continent", "Africa");
hashMap.set("instrument", "Piano");
hashMap.set("company", "Google");
hashMap.set("currency", "Euro");
hashMap.set("planet", "Mars");
hashMap.set("flower", "Rose");
hashMap.set("shoe", "Sneaker");
hashMap.set("constellation", "Orion");
hashMap.set("element", "Gold");
hashMap.set("time", "Midnight");
hashMap.set("city2", "Paris");
hashMap.set("drink2", "Tea");
hashMap.set("sport2", "Tennis");
hashMap.set("subject2", "History");
hashMap.set("planet2", "Earth");
hashMap.set("animal2", "Elephant");
hashMap.set("book2", "To Kill a Mockingbird");
hashMap.set("city3", "London");
hashMap.set("food2", "Sushi");
hashMap.set("emotion2", "Sad");
hashMap.set("drink3", "Orange Juice");
hashMap.set("instrument2", "Violin");
hashMap.set("job2", "Teacher");
hashMap.set("color2", "Green");
hashMap.set("subject3", "Mathematics");
hashMap.set("language2", "Python");
hashMap.set("company2", "Microsoft");
hashMap.set("team2", "Yankees");
hashMap.set("movie2", "The Shawshank Redemption");
hashMap.set("sport3", "Basketball");
hashMap.set("holiday2", "Thanksgiving");
hashMap.set("weather2", "Rainy");
hashMap.set("time2", "Noon");
hashMap.set("music2", "Rock");
hashMap.set("flower2", "Tulip");
hashMap.set("shoe2", "High Heels");
hashMap.set("element2", "Silver");
hashMap.set("currency2", "Dollar");
hashMap.set("fruit2", "Apple");
hashMap.set("game2", "Monopoly");
hashMap.set("car2", "Ford");
hashMap.set("constellation2", "Ursa Major");
hashMap.set("school2", "Harvard");
hashMap.set("country2", "Australia");
hashMap.set("continent2", "Antarctica");
hashMap.set("job3", "Doctor");
hashMap.set("music3", "Hip Hop");
hashMap.set("drink4", "Coca Cola");
hashMap.set("animal3", "Kangaroo");
hashMap.set("book3", "1984");
hashMap.set("city4", "Tokyo");
hashMap.set("food3", "Pasta");
hashMap.set("emotion3", "Excited");
hashMap.set("element3", "Platinum");
hashMap.set("team3", "Red Sox");
hashMap.set("movie3", "The Godfather");
hashMap.set("subject4", "Chemistry");
hashMap.set("color3", "Purple");
hashMap.set("language3", "Java");

console.log("get(constellation2):", hashMap.get("constellation2"));
console.log("get(40):", hashMap.get(40));
console.log("get(22):", hashMap.get(22));
console.log("has(2131):", hashMap.has(2131));
console.log("has(22):", hashMap.has(22));
console.log("has(music2):", hashMap.has("music2"));
console.log("remove(music2):", hashMap.remove("music2"));
console.log("has(music2):", hashMap.has("music2"));
console.log("length:", hashMap.length());
// hashMap.clear();
// console.log("keys:", hashMap.keys())
// console.log("values:", hashMap.values());
// console.log("entries:", hashMap.entries());
// console.log(hashMap)


// ==================================! HASHSET !==========================================
const set = new HashSet();
set.set("apple")
set.set("banana")
set.set("orange")
set.set("grape")
set.set(1)
set.set(2)
set.set(3)
set.set(4)
const obj1 = { name: "John", age: 30 }
const obj2 = { name: "Alice", age: 25 }
const obj3 = { name: "Bob", age: 35 }
set.set(obj1)
set.set(obj2)
set.set(obj3)
console.log("Hashset Keys:", set.keys())
console.log(set.has("banana")); // Output: true
console.log(set.has("watermelon")); // Output: false
console.log(set.length())
set.clear();
console.log(set.length())