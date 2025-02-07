import * as Keychain from 'react-native-keychain';
import jwtDecode from 'jwt-decode';

// Save token
const saveToken = async (token) => {
  try {
    await Keychain.setGenericPassword('jwt_token', token);
    console.log('Token saved:', token);
  } catch (error) {
    console.error('Error saving token:', error);
  }
};

// Get token
const getToken = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    console.log('Credentials fetched:', credentials);
    
    if (credentials) {
      console.log('Retrieved password:', credentials.password);
      return credentials.password;
    } else {
      console.log('No credentials found');
      return null;
    }
  } catch (error) {
    console.error('Error retrieving token from Keychain:', error);
    return null;
  }
};

// Check token existence
const checkIfTokenExists = async () => {
  try {
    const credentials = await Keychain.getGenericPassword();
    console.log('Credentials fetched (check if exists):', credentials);
    return credentials ? true : false;
  } catch (error) {
    console.error('Error checking token existence:', error);
    return false;
  }
};

// Check token expiration
const checkTokenExpiration = (token) => {
    if (!token) {
        return false;
    }

    try {
        const decodedToken = jwtDecode(token);
        const expirationTime = decodedToken.exp * 1000; // JWT exp is usually in seconds, converting to milliseconds
        return expirationTime >= Date.now();
    } catch (error) {
        console.error('Failed to decode token:', error);
        return false;
    }
}

// Delete token
const deleteToken = async () => {
  try {
    await Keychain.resetGenericPassword();
    console.log('Token deleted');
  } catch (error) {
    console.error('Error deleting token:', error);
  }
};



export { saveToken, getToken, deleteToken, checkTokenExpiration, checkIfTokenExists };