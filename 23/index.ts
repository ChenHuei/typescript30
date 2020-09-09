// 私有建構子 & 單例模式

/*
私有建構子 (private constructor) = private + constructor

class C {
    private constructor(...arg) {
        // ..
    }
}
*/


/*
單例模式 (Singleton Pattern)

若某類別採取單例模式，則該類別產出的物件會是全域裡面的唯一個體。

1. C 的建構子函式為 private
2. C 必須要有 private static 的屬性專門存放單例模式下的唯一物件(aka singleton)
3. C 必須要有 public  static 的方法，負責把 singleton 回傳出來

對單例模式進行繼承並不違反單例模式的初衷，運用繼承目的：
1. 子類別可擴充該個體的功能
2. 多個子類別的單例物件可在程式中切換


更進一步，由於在程式中可能不需要一開使就使用到 singleton 產生的唯一個體，為避免造成額外資訊消耗而出現 

Lazy Initialization in Singleton Pattern

- 第一次呼叫 SingletonClass.getInstance 靜態方法時，再建立就可以了

*/

class LazySingletonPerson {
    private constructor(
        public readonly name: string,
        public readonly age: number,
        public readonly hasPet: boolean
    ) {}

    private static Instance: LazySingletonPerson | null = null

    static getInstance(): LazySingletonPerson { 
        if (this.Instance === null) {
            this.Instance = new LazySingletonPerson('leo', 20, false)
        }
        return this.Instance 
    }
}