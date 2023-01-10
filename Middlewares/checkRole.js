const roles = {
USER: "USER",
ADMIN: "ADMIN",
};

module.exports = function (roleToCheck, options = {}) {
return function (req, res, next) {
const user = req.user;
const rolesHierarchy = Object.keys(roles);
if (!user) {
    return res.status(401).json({ error: 'Not authenticated' });
}
if (rolesHierarchy.indexOf(user.role) < rolesHierarchy.indexOf(roleToCheck)) {
  return res.status(401).json({ error: 'Not authorized' });
}
next();
};
};

module.exports.ROLES = roles;
