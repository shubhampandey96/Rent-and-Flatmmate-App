// Temporary Role Middleware
// Allows every authenticated user

export const isOwner = (req, res, next) => {
  next();
};

export const isTenant = (req, res, next) => {
  next();
};

export const isAdmin = (req, res, next) => {
  next();
};