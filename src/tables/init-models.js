import _sequelize from "sequelize";
const DataTypes = _sequelize.DataTypes;
import _applications from  "./applications.js";
import _applications_brands from  "./applications_brands.js";
import _applications_categories from  "./applications_categories.js";
import _applications_common_information from  "./applications_common_information.js";
import _applications_components from  "./applications_components.js";
import _applications_delivery_types from  "./applications_delivery_types.js";
import _applications_licenses from  "./applications_licenses.js";
import _applications_payment_methods from  "./applications_payment_methods.js";
import _applications_payments from  "./applications_payments.js";
import _applications_users from  "./applications_users.js";
import _banners from  "./banners.js";
import _brands from  "./brands.js";
import _categories from  "./categories.js";
import _categories_media_objects from  "./categories_media_objects.js";
import _clients_commerce_types from  "./clients_commerce_types.js";
import _communes from  "./communes.js";
import _components from  "./components.js";
import _counters from  "./counters.js";
import _countries from  "./countries.js";
import _couriers from  "./couriers.js";
import _delivery_types from  "./delivery_types.js";
import _external_configurations from  "./external_configurations.js";
import _flavours from  "./flavours.js";
import _gateways from  "./gateways.js";
import _gateways_payments_methods from  "./gateways_payments_methods.js";
import _languages from  "./languages.js";
import _media_objects from  "./media_objects.js";
import _payments from  "./payments.js";
import _payments_methods from  "./payments_methods.js";
import _payments_status from  "./payments_status.js";
import _products from  "./products.js";
import _products_best_sellers from  "./products_best_sellers.js";
import _products_categories from  "./products_categories.js";
import _products_colors from  "./products_colors.js";
import _products_media_objects from  "./products_media_objects.js";
import _products_qualifications from  "./products_qualifications.js";
import _products_sizes from  "./products_sizes.js";
import _products_sizes_deliveries from  "./products_sizes_deliveries.js";
import _products_skus from  "./products_skus.js";
import _products_tags from  "./products_tags.js";
import _profiles from  "./profiles.js";
import _provinces from  "./provinces.js";
import _regions from  "./regions.js";
import _s_perfiles from  "./s_perfiles.js";
import _s_usuarios from  "./s_usuarios.js";
import _s_usuarios_perfiles from  "./s_usuarios_perfiles.js";
import _sessions from  "./sessions.js";
import _shipments_types from  "./shipments_types.js";
import _shipments_zones from  "./shipments_zones.js";
import _shipments_zones_couriers from  "./shipments_zones_couriers.js";
import _status from  "./status.js";
import _tags from  "./tags.js";
import _taxes from  "./taxes.js";
import _testimonials from  "./testimonials.js";
import _transactions from  "./transactions.js";
import _transactions_products from  "./transactions_products.js";
import _transactions_status from  "./transactions_status.js";
import _user_searches from  "./user_searches.js";
import _users from  "./users.js";
import _users_access_tokens from  "./users_access_tokens.js";
import _users_gateways from  "./users_gateways.js";
import _users_payments_methods from  "./users_payments_methods.js";
import _users_profiles from  "./users_profiles.js";
import _users_shipping_address from  "./users_shipping_address.js";
import _users_shopping_cart from  "./users_shopping_cart.js";
import _users_social_logins from  "./users_social_logins.js";

export default function initModels(sequelize) {
  const applications = _applications.init(sequelize, DataTypes);
  const applications_brands = _applications_brands.init(sequelize, DataTypes);
  const applications_categories = _applications_categories.init(sequelize, DataTypes);
  const applications_common_information = _applications_common_information.init(sequelize, DataTypes);
  const applications_components = _applications_components.init(sequelize, DataTypes);
  const applications_delivery_types = _applications_delivery_types.init(sequelize, DataTypes);
  const applications_licenses = _applications_licenses.init(sequelize, DataTypes);
  const applications_payment_methods = _applications_payment_methods.init(sequelize, DataTypes);
  const applications_payments = _applications_payments.init(sequelize, DataTypes);
  const applications_users = _applications_users.init(sequelize, DataTypes);
  const banners = _banners.init(sequelize, DataTypes);
  const brands = _brands.init(sequelize, DataTypes);
  const categories = _categories.init(sequelize, DataTypes);
  const categories_media_objects = _categories_media_objects.init(sequelize, DataTypes);
  const clients_commerce_types = _clients_commerce_types.init(sequelize, DataTypes);
  const communes = _communes.init(sequelize, DataTypes);
  const components = _components.init(sequelize, DataTypes);
  const counters = _counters.init(sequelize, DataTypes);
  const countries = _countries.init(sequelize, DataTypes);
  const couriers = _couriers.init(sequelize, DataTypes);
  const delivery_types = _delivery_types.init(sequelize, DataTypes);
  const external_configurations = _external_configurations.init(sequelize, DataTypes);
  const flavours = _flavours.init(sequelize, DataTypes);
  const gateways = _gateways.init(sequelize, DataTypes);
  const gateways_payments_methods = _gateways_payments_methods.init(sequelize, DataTypes);
  const languages = _languages.init(sequelize, DataTypes);
  const media_objects = _media_objects.init(sequelize, DataTypes);
  const payments = _payments.init(sequelize, DataTypes);
  const payments_methods = _payments_methods.init(sequelize, DataTypes);
  const payments_status = _payments_status.init(sequelize, DataTypes);
  const products = _products.init(sequelize, DataTypes);
  const products_best_sellers = _products_best_sellers.init(sequelize, DataTypes);
  const products_categories = _products_categories.init(sequelize, DataTypes);
  const products_colors = _products_colors.init(sequelize, DataTypes);
  const products_media_objects = _products_media_objects.init(sequelize, DataTypes);
  const products_qualifications = _products_qualifications.init(sequelize, DataTypes);
  const products_sizes = _products_sizes.init(sequelize, DataTypes);
  const products_sizes_deliveries = _products_sizes_deliveries.init(sequelize, DataTypes);
  const products_skus = _products_skus.init(sequelize, DataTypes);
  const products_tags = _products_tags.init(sequelize, DataTypes);
  const profiles = _profiles.init(sequelize, DataTypes);
  const provinces = _provinces.init(sequelize, DataTypes);
  const regions = _regions.init(sequelize, DataTypes);
  const s_perfiles = _s_perfiles.init(sequelize, DataTypes);
  const s_usuarios = _s_usuarios.init(sequelize, DataTypes);
  const s_usuarios_perfiles = _s_usuarios_perfiles.init(sequelize, DataTypes);
  const sessions = _sessions.init(sequelize, DataTypes);
  const shipments_types = _shipments_types.init(sequelize, DataTypes);
  const shipments_zones = _shipments_zones.init(sequelize, DataTypes);
  const shipments_zones_couriers = _shipments_zones_couriers.init(sequelize, DataTypes);
  const status = _status.init(sequelize, DataTypes);
  const tags = _tags.init(sequelize, DataTypes);
  const taxes = _taxes.init(sequelize, DataTypes);
  const testimonials = _testimonials.init(sequelize, DataTypes);
  const transactions = _transactions.init(sequelize, DataTypes);
  const transactions_products = _transactions_products.init(sequelize, DataTypes);
  const transactions_status = _transactions_status.init(sequelize, DataTypes);
  const user_searches = _user_searches.init(sequelize, DataTypes);
  const users = _users.init(sequelize, DataTypes);
  const users_access_tokens = _users_access_tokens.init(sequelize, DataTypes);
  const users_gateways = _users_gateways.init(sequelize, DataTypes);
  const users_payments_methods = _users_payments_methods.init(sequelize, DataTypes);
  const users_profiles = _users_profiles.init(sequelize, DataTypes);
  const users_shipping_address = _users_shipping_address.init(sequelize, DataTypes);
  const users_shopping_cart = _users_shopping_cart.init(sequelize, DataTypes);
  const users_social_logins = _users_social_logins.init(sequelize, DataTypes);

  applications_brands.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_brands, { as: "applications_brands", foreignKey: "application_id"});
  applications_categories.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_categories, { as: "applications_categories", foreignKey: "application_id"});
  applications_components.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_components, { as: "applications_components", foreignKey: "application_id"});
  applications_delivery_types.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_delivery_types, { as: "applications_delivery_types", foreignKey: "application_id"});
  applications_licenses.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_licenses, { as: "applications_licenses", foreignKey: "application_id"});
  applications_payment_methods.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_payment_methods, { as: "applications_payment_methods", foreignKey: "application_id"});
  applications_payments.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_payments, { as: "applications_payments", foreignKey: "application_id"});
  applications_users.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(applications_users, { as: "applications_users", foreignKey: "application_id"});
  counters.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(counters, { as: "counters", foreignKey: "application_id"});
  products_best_sellers.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(products_best_sellers, { as: "products_best_sellers", foreignKey: "application_id"});
  products_categories.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(products_categories, { as: "products_categories", foreignKey: "application_id"});
  shipments_types.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(shipments_types, { as: "shipments_types", foreignKey: "application_id"});
  shipments_zones.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(shipments_zones, { as: "shipments_zones", foreignKey: "application_id"});
  tags.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(tags, { as: "tags", foreignKey: "application_id"});
  taxes.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(taxes, { as: "taxes", foreignKey: "application_id"});
  transactions.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(transactions, { as: "transactions", foreignKey: "application_id"});
  transactions_products.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(transactions_products, { as: "transactions_products", foreignKey: "application_id"});
  user_searches.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(user_searches, { as: "user_searches", foreignKey: "application_id"});
  users_access_tokens.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(users_access_tokens, { as: "users_access_tokens", foreignKey: "application_id"});
  users_payments_methods.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(users_payments_methods, { as: "users_payments_methods", foreignKey: "application_id"});
  users_shipping_address.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(users_shipping_address, { as: "users_shipping_addresses", foreignKey: "application_id"});
  users_shopping_cart.belongsTo(applications, { as: "application", foreignKey: "application_id"});
  applications.hasMany(users_shopping_cart, { as: "users_shopping_carts", foreignKey: "application_id"});
  applications_payments.belongsTo(applications_licenses, { as: "application_license", foreignKey: "application_license_id"});
  applications_licenses.hasMany(applications_payments, { as: "applications_payments", foreignKey: "application_license_id"});
  applications_brands.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(applications_brands, { as: "applications_brands", foreignKey: "brand_id"});
  products.belongsTo(brands, { as: "brand", foreignKey: "brand_id"});
  brands.hasMany(products, { as: "products", foreignKey: "brand_id"});
  applications_categories.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(applications_categories, { as: "applications_categories", foreignKey: "category_id"});
  products_categories.belongsTo(categories, { as: "category", foreignKey: "category_id"});
  categories.hasMany(products_categories, { as: "products_categories", foreignKey: "category_id"});
  applications_components.belongsTo(components, { as: "component", foreignKey: "component_id"});
  components.hasMany(applications_components, { as: "applications_components", foreignKey: "component_id"});
  applications_common_information.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(applications_common_information, { as: "applications_common_informations", foreignKey: "country_id"});
  regions.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(regions, { as: "regions", foreignKey: "country_id"});
  shipments_zones.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(shipments_zones, { as: "shipments_zones", foreignKey: "country_id"});
  users_shipping_address.belongsTo(countries, { as: "country", foreignKey: "country_id"});
  countries.hasMany(users_shipping_address, { as: "users_shipping_addresses", foreignKey: "country_id"});
  applications_common_information.belongsTo(couriers, { as: "courier", foreignKey: "courier_id"});
  couriers.hasMany(applications_common_information, { as: "applications_common_informations", foreignKey: "courier_id"});
  applications_common_information.belongsTo(delivery_types, { as: "delivery_type", foreignKey: "delivery_type_id"});
  delivery_types.hasMany(applications_common_information, { as: "applications_common_informations", foreignKey: "delivery_type_id"});
  applications_delivery_types.belongsTo(delivery_types, { as: "delivery_type", foreignKey: "delivery_type_id"});
  delivery_types.hasMany(applications_delivery_types, { as: "applications_delivery_types", foreignKey: "delivery_type_id"});
  payments.belongsTo(delivery_types, { as: "delivery_type", foreignKey: "delivery_type_id"});
  delivery_types.hasMany(payments, { as: "payments", foreignKey: "delivery_type_id"});
  shipments_types.belongsTo(delivery_types, { as: "delivery_type", foreignKey: "delivery_type_id"});
  delivery_types.hasMany(shipments_types, { as: "shipments_types", foreignKey: "delivery_type_id"});
  applications_common_information.belongsTo(gateways, { as: "gateway", foreignKey: "gateway_id"});
  gateways.hasMany(applications_common_information, { as: "applications_common_informations", foreignKey: "gateway_id"});
  gateways_payments_methods.belongsTo(gateways, { as: "gateway", foreignKey: "gateway_id"});
  gateways.hasMany(gateways_payments_methods, { as: "gateways_payments_methods", foreignKey: "gateway_id"});
  users_gateways.belongsTo(gateways, { as: "gateway", foreignKey: "gateway_id"});
  gateways.hasMany(users_gateways, { as: "users_gateways", foreignKey: "gateway_id"});
  applications_payment_methods.belongsTo(payments_methods, { as: "payment_method", foreignKey: "payment_method_id"});
  payments_methods.hasMany(applications_payment_methods, { as: "applications_payment_methods", foreignKey: "payment_method_id"});
  gateways_payments_methods.belongsTo(payments_methods, { as: "payment_method", foreignKey: "payment_method_id"});
  payments_methods.hasMany(gateways_payments_methods, { as: "gateways_payments_methods", foreignKey: "payment_method_id"});
  payments.belongsTo(payments_methods, { as: "payment_method", foreignKey: "payment_method_id"});
  payments_methods.hasMany(payments, { as: "payments", foreignKey: "payment_method_id"});
  users_payments_methods.belongsTo(payments_methods, { as: "payment_method", foreignKey: "payment_method_id"});
  payments_methods.hasMany(users_payments_methods, { as: "users_payments_methods", foreignKey: "payment_method_id"});
  products_best_sellers.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_best_sellers, { as: "products_best_sellers", foreignKey: "product_id"});
  products_categories.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_categories, { as: "products_categories", foreignKey: "product_id"});
  products_qualifications.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_qualifications, { as: "products_qualifications", foreignKey: "product_id"});
  products_skus.belongsTo(products, { as: "product", foreignKey: "product_id"});
  products.hasMany(products_skus, { as: "products_skus", foreignKey: "product_id"});
  transactions_products.belongsTo(products_skus, { as: "product_sku", foreignKey: "product_sku_id"});
  products_skus.hasMany(transactions_products, { as: "transactions_products", foreignKey: "product_sku_id"});
  shipments_zones.belongsTo(provinces, { as: "province", foreignKey: "province_id"});
  provinces.hasMany(shipments_zones, { as: "shipments_zones", foreignKey: "province_id"});
  shipments_zones.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(shipments_zones, { as: "shipments_zones", foreignKey: "region_id"});
  users_shipping_address.belongsTo(regions, { as: "region", foreignKey: "region_id"});
  regions.hasMany(users_shipping_address, { as: "users_shipping_addresses", foreignKey: "region_id"});
  applications_common_information.belongsTo(shipments_types, { as: "shipment_type", foreignKey: "shipment_type_id"});
  shipments_types.hasMany(applications_common_information, { as: "applications_common_informations", foreignKey: "shipment_type_id"});
  applications_brands.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(applications_brands, { as: "applications_brands", foreignKey: "status_id"});
  applications_categories.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(applications_categories, { as: "applications_categories", foreignKey: "status_id"});
  applications_components.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(applications_components, { as: "applications_components", foreignKey: "status_id"});
  applications_licenses.belongsTo(status, { as: "status", foreignKey: "status_id"});
  status.hasMany(applications_licenses, { as: "applications_licenses", foreignKey: "status_id"});
  transactions_products.belongsTo(transactions, { as: "transaction", foreignKey: "transaction_id"});
  transactions.hasMany(transactions_products, { as: "transactions_products", foreignKey: "transaction_id"});
  transactions.belongsTo(transactions_status, { as: "transaction_status", foreignKey: "transaction_status_id"});
  transactions_status.hasMany(transactions, { as: "transactions", foreignKey: "transaction_status_id"});
  applications_payments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(applications_payments, { as: "applications_payments", foreignKey: "user_id"});
  applications_users.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(applications_users, { as: "applications_users", foreignKey: "user_id"});
  payments.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(payments, { as: "payments", foreignKey: "user_id"});
  transactions.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(transactions, { as: "transactions", foreignKey: "user_id"});
  user_searches.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(user_searches, { as: "user_searches", foreignKey: "user_id"});
  users_gateways.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_gateways, { as: "users_gateways", foreignKey: "user_id"});
  users_shipping_address.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_shipping_address, { as: "users_shipping_addresses", foreignKey: "user_id"});
  users_shopping_cart.belongsTo(users, { as: "user", foreignKey: "user_id"});
  users.hasMany(users_shopping_cart, { as: "users_shopping_carts", foreignKey: "user_id"});
  users_payments_methods.belongsTo(users_gateways, { as: "user_gateway", foreignKey: "user_gateway_id"});
  users_gateways.hasMany(users_payments_methods, { as: "users_payments_methods", foreignKey: "user_gateway_id"});

  return {
    applications,
    applications_brands,
    applications_categories,
    applications_common_information,
    applications_components,
    applications_delivery_types,
    applications_licenses,
    applications_payment_methods,
    applications_payments,
    applications_users,
    banners,
    brands,
    categories,
    categories_media_objects,
    clients_commerce_types,
    communes,
    components,
    counters,
    countries,
    couriers,
    delivery_types,
    external_configurations,
    flavours,
    gateways,
    gateways_payments_methods,
    languages,
    media_objects,
    payments,
    payments_methods,
    payments_status,
    products,
    products_best_sellers,
    products_categories,
    products_colors,
    products_media_objects,
    products_qualifications,
    products_sizes,
    products_sizes_deliveries,
    products_skus,
    products_tags,
    profiles,
    provinces,
    regions,
    s_perfiles,
    s_usuarios,
    s_usuarios_perfiles,
    sessions,
    shipments_types,
    shipments_zones,
    shipments_zones_couriers,
    status,
    tags,
    taxes,
    testimonials,
    transactions,
    transactions_products,
    transactions_status,
    user_searches,
    users,
    users_access_tokens,
    users_gateways,
    users_payments_methods,
    users_profiles,
    users_shipping_address,
    users_shopping_cart,
    users_social_logins,
  };
}
