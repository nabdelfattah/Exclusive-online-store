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
    errors.push("Name is required.");
    isValid = false;
  }

  // Check email
  if (!email.trim()) {
    errors.push("Email is required.");
    isValid = false;
  } else if (!isValidEmail(email)) {
    errors.push("Invalid email address.");
    isValid = false;
  }

  // Check password
  if (!password.trim()) {
    errors.push("Password is required.");
    isValid = false;
  } else if (password.length < 8) {
    errors.push("Password must be at least 8 characters long.");
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
