
// const bash_url = "http://192.168.1.201:8080/nimit/laravel/babyshop_priyal/babyshop_new/api/";
const bash_url = "http://testnew.babyshopindia.com/api/";

const RAZORPAY_KEY = 'rzp_test_BLDAQj8bOhO4Qs'
const RAZORPAY_SECRET = '5HJNc3JdoGitMlNU52LHwxB6'

export const API = {
    // googleKey: 'AIzaSyBmYmKGhtdNg0C0rEtscp4OSXCWZ-Ralj8',
    razorpayKey: RAZORPAY_KEY,
    razorpaySecret: RAZORPAY_SECRET,
    googleKey: 'AIzaSyCFGtlwJwkgasKTqmnPB5FHBT0qYmaanFk',

    // Auth API
    login: bash_url + 'login',
    register: bash_url + 'register',
    otp_verify_resend: bash_url + 'otp_verify_resend',
    forget: bash_url + 'forget',

    // dashboard API
    dashboard: bash_url + 'dashboard',
    brand: bash_url + 'brand',
    category: bash_url + 'category',

    // Children API
    children_list: bash_url + 'children_list',
    children_delete: bash_url + 'children_delete',
    children_add_edit: bash_url + 'children_add_edit',

    // city state country pincode API
    city_pincode_list: bash_url + 'city_pincode_list',
    country_list: bash_url + 'country_list',
    state_list: bash_url + 'state_list',
    city_list: bash_url + 'city_list',

    // Address API
    address_types: bash_url + 'address_types',
    address_list: bash_url + 'address_list',
    address_store: bash_url + 'address_store',
    address_set_default: bash_url + 'address_set_default',
    address_delete: bash_url + 'address_delete',

    // products API
    get_products: bash_url + 'get-products',
    get_product_in_detail: bash_url + 'get_product_in_detail',

    // Question API
    product_question_list: bash_url + 'product_question_list',
    add_product_question: bash_url + 'add_product_question',

    // Wishlist API
    add_to_wishlist: bash_url + 'add_to_wishlist',
    remove_to_wishlist: bash_url + 'remove_to_wishlist',
    my_wish_list: bash_url + 'my_wish_list',

    //Cart API
    add_or_remove_to_cart: bash_url + 'add_or_remove_to_cart',
    mycart_list: bash_url + 'mycart_list',

    // place_order API
    process_to_checkout: bash_url + 'process_to_checkout',
    place_order: bash_url + 'place_order',

    offer_coupon_list: bash_url + 'offer_coupon_list',

    //Wallet API
    wallet_list: bash_url + 'wallet_list',
    add_money: bash_url + 'add_money',
    
    // refer_and_earn
    refer_and_earn: bash_url + 'refer_and_earn',

    // Other API
    contact_to_admin: bash_url + 'contact_to_admin',
    about_us: bash_url + 'about_us',
    privacy_policy: bash_url + 'privacy_policy',
    shipping_policy: bash_url + 'shipping_policy',
}

export const User = {
    user_id: '',
    name: '',
    email: '',
    phonenumber: '',
    serial_code: '',
    user_image: '',
    token: '',

    first_time: '',

    liveCoords: { latitude: 0, longitude: 0 },

    active_menu: 'Home',
    deviceToken: '',
    OSUserId: '',

    slider_top: [],
}