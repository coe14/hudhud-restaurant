// 1. የምግብ ምድብ (Category) ፖዚሽን
export interface Category {
  _id: string;
  name: string;
  description?: string;
}

// 2. የምግብ ዝርዝር (Food Item) ፖዚሽን
export interface FoodItem {
  _id: string;
  name: string;
  description: string;
  price: number;
  category: Category | string;
  image: string;
  isAvailable: boolean;
}

// 3. የትዕዛዝ (Order) ፖዚሽን
export interface OrderItem {
  food: string; // Food ID
  quantity: number;
}

export interface Order {
  _id?: string;
  customerName: string;
  phone: string;
  tableNumber?: string;
  items: OrderItem[];
  totalAmount: number;
  status?: "Pending" | "Preparing" | "Completed" | "Cancelled";
}
