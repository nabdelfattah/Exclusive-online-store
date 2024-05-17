/**
 * Validates user sign-up information such as name, email, and password.
 * 
 * @param {string} name - The user's name.
 * @param {string} email - The user's email address.
 * @param {string} password - The user's password.
 * @returns {Object} An object containing information about any incorrect details in the sign-up information.
 *                    - isValid: A boolean indicating whether the sign-up information is valid or not.
 *                    - errors: An array of strings containing details about the incorrect fields. If no errors are found, this array is empty.
 */
export function validateSignUp(name, email, password) {
  const errors = [];
  let isValid = true;

  // Check name
  if (!name.trim()) {
    errors.push("Name is required");
    isValid = false;
  }

  // Check email
  if (!email.trim()) {
    errors.push("Email is required");
    isValid = false;
  } else if (!isValidEmail(email)) {
    errors.push("Invalid email address");
    isValid = false;
  }

  // Check password
  if (!password.trim()) {
    errors.push("Password is required");
    isValid = false;
  } else if (password.length < 8) {
    errors.push("Password must be at least 8 characters long");
    isValid = false;
  }
  return { isValid, errors };
}

/**
 * Helper function to validate email format.
 * 
 * @param {string} email - The email address to validate.
 * @returns {boolean} A boolean indicating whether the email address is valid or not.
 */
function isValidEmail(email) {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

export function addToWishlist(id) {
  // Get current wishlist items from local storage
  let wishlistItems = JSON.parse(localStorage.getItem('wishlist')) || [];

  // Check if the item is already in the wishlist
  if (!wishlistItems.includes(id)) {
    // Add the item to the wishlist
    wishlistItems.push(id);
  } else {
    // Remove it from wishlist. To have the effect of toggling
    wishlistItems = wishlistItems.filter(item => item != id)
  }
  // Update the wishlist in local storage
  localStorage.setItem('wishlist', JSON.stringify(wishlistItems));
}

export function addToCart(item) {
  // Get current cart items from local storage
  let cartItems = JSON.parse(localStorage.getItem('cart')) || [];

  // Check if an item with the same id already exists in the cart
  const existingIndex = cartItems.findIndex((cartItem) => cartItem.id === item.id);

  if (existingIndex !== -1) {
    // Replace the existing item with the new item
    cartItems[existingIndex] = item;
  } else {
    // Add the item to the cart
    cartItems.push(item);
  }

  // Update the cart in local storage
  localStorage.setItem('cart', JSON.stringify(cartItems));
}


export function storeReview(review) {
  const { id, rating, img } = review;
  // Retrieve the existing reviews from local storage
  const reviews = JSON.parse(localStorage.getItem('userReviews')) || [];
  // Check if the product already has a review
  const existingReviewIndex = reviews.findIndex(r => r.id === id);
  if (existingReviewIndex !== -1) {
    // If the product already exists, update the rating
    reviews[existingReviewIndex].rating = rating;
  } else {
    // If the product doesn't exist, add the new review
    reviews.push({ id, rating, img });
  }
  // Store the updated reviews back in local storage
  localStorage.setItem('userReviews', JSON.stringify(reviews));
}