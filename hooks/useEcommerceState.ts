import create from 'zustand'
import toast from 'react-hot-toast';
import { persist, devtools } from 'zustand/middleware'

export interface Product {
  id: string;
  name: string;
  image: string;
  price: number;
  category: string;
  shipping: number;
  quantity?: number;
  description?: number;
}

interface EcommerceState {
  cart: Product[];
  wishlist: Product[];
  totalCartPrice: number;
  totalWishListPrice: number;
  addToCart: (product: Product) => void;
  addToWishList: (product: Product) => void;
  removeFromCart: (product: Product) => void;
  removeFromWishlist: (product: Product) => void;
  decreaseQuantity: (product: Product, source: "cart" | "wishlist") => void;
  increaseQuantity: (product: Product, source: "cart" | "wishlist") => void;
}

const removeFromGroup = (source: Product[], target: Product, price = 0) => {
  const newgroup = source.filter((item) => item.id !== target.id)
  newgroup.forEach((product) => price += product.price * product.quantity!)
  return { newProducts: newgroup, newPrice: price }
}

const changeQuantity = (source: Product[], target: Product, action: "inc" | "dec", price = 0) => {
  const productIndex = source.findIndex((prod => prod.id == target.id));
  const quantity = source[productIndex].quantity
  if (action == "inc") source[productIndex].quantity = quantity! + 1
  if (action == "dec" && quantity! > 1) source[productIndex].quantity = quantity! - 1
  source.forEach((product) => price += product.price * product.quantity!)
  return { products: source, totalPrice: Math.round((price + Number.EPSILON) * 100) / 100 }
}

const useEcommerceState = create<EcommerceState>()(devtools(persist((set, get) => ({
  cart: [],
  wishlist: [],
  totalCartPrice: 0,
  totalWishListPrice: 0,
  removeFromCart: (product) => set(state => {
    toast.success("Product removed from cart")
    const { newProducts, newPrice } = removeFromGroup(state.cart, product)
    return ({ cart: [...newProducts], totalCartPrice: newPrice })
  }),
  removeFromWishlist: (product) => set(state => {
    toast.success("Product removed from wishlist")
    const { newProducts, newPrice } = removeFromGroup(state.wishlist, product)
    return ({ wishlist: [...newProducts], totalWishListPrice: newPrice })
  }),
  increaseQuantity: (product, source) => set(state => {
    const target = (source === "cart" ? state.cart : state.wishlist)
    const { products, totalPrice } = changeQuantity(target, product, "inc")
    if (source === "cart") return ({ cart: [...products], totalCartPrice: totalPrice })
    else return ({ wishlist: [...products], totalWishListPrice: totalPrice })
  }),
  decreaseQuantity: (product, source) => set(state => {
    const target = (source === "cart" ? state.cart : state.wishlist)
    const { products, totalPrice } = changeQuantity(target, product, "dec")
    if (source == "cart") return ({ cart: [...products], totalCartPrice: totalPrice })
    else return ({ wishlist: [...products], totalWishListPrice: totalPrice })
  }),
  addToCart: (product) => set(state => {
    toast.success("Product added to cart")
    if (state.cart.filter((item) => item.id === product.id).length > 0) {
      const { products, totalPrice } = changeQuantity(state.cart, product, "inc")
      return ({ cart: [...products], totalCartPrice: totalPrice })
    } else {
      return ({ cart: [...state.cart, { ...product, quantity: 1 }], totalCartPrice: product.price });
    }
  }),
  addToWishList: (product) => set(state => {
    if (state.wishlist.filter((item) => item.id === product.id).length > 0) {
      toast.error("Product already in your wishlist")
      return ({ wishlist: [...state.wishlist] })
    } else {
      toast.success("Product added to your wishlist")
      return ({ wishlist: [...state.wishlist, { ...product, quantity: 1 }], totalWishListPrice: product.price });
    }
  }),

}), { name: 'EcommerceState' })))

export default useEcommerceState