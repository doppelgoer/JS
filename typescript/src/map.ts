const map = new Map();

map.set(1, "a");
map.set("a", "a");
map.set(() => null, "a");
map.set([1, 2, 3], "a");
map.set({ a: 1 }, "a");
map.set(new Map(), "a");

console.log(map);

//"a"
const key1 = map.get(1);

//true
const hasKey1 = map.has(1);
//false
const hasKey2 = map.has(123123);

// key가 1인 요소 제거
map.delete(1);

const map2 = new Map<string, number>();
map2.set("2", 1);
map2.size;

const map3 = new Map();

map3.set(1, 1).set(2, 2).set(3, 3);
