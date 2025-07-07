-- Insert sample products
INSERT INTO products (name, description, price, original_price, image_url, category, brand, rating, review_count) VALUES
('Samsung 55" 4K Smart TV', 'Crystal clear 4K resolution with smart TV features', 399.99, 599.99, '/placeholder.svg?height=200&width=200', 'electronics', 'Samsung', 4.5, 1234),
('Apple AirPods Pro', 'Active noise cancellation wireless earbuds', 199.99, 249.99, '/placeholder.svg?height=200&width=200', 'electronics', 'Apple', 4.8, 5678),
('Nike Air Max Sneakers', 'Comfortable running shoes with air cushioning', 89.99, 120.00, '/placeholder.svg?height=200&width=200', 'fashion', 'Nike', 4.3, 892),
('Instant Pot Duo 7-in-1', 'Multi-functional pressure cooker', 79.99, 99.99, '/placeholder.svg?height=200&width=200', 'home', 'Instant Pot', 4.7, 3456),
('Dyson V11 Vacuum', 'Cordless stick vacuum with powerful suction', 449.99, 599.99, '/placeholder.svg?height=200&width=200', 'home', 'Dyson', 4.6, 2134),
('KitchenAid Stand Mixer', 'Professional grade stand mixer', 279.99, 349.99, '/placeholder.svg?height=200&width=200', 'home', 'KitchenAid', 4.9, 1567),
('Organic Bananas', 'Fresh organic bananas, 2 lbs', 2.99, NULL, '/placeholder.svg?height=200&width=200', 'grocery', 'Organic Valley', 4.2, 234),
('Greek Yogurt', 'Plain Greek yogurt, 32 oz', 4.99, NULL, '/placeholder.svg?height=200&width=200', 'grocery', 'Chobani', 4.4, 567),
('Vitamin D3 Supplements', 'High potency vitamin D3, 60 capsules', 12.99, 16.99, '/placeholder.svg?height=200&width=200', 'health', 'Nature Made', 4.6, 890),
('Baby Formula', 'Infant formula powder, 12.4 oz', 24.99, NULL, '/placeholder.svg?height=200&width=200', 'baby', 'Similac', 4.5, 1234);

-- Insert sample reviews
INSERT INTO reviews (product_id, user_id, rating, comment) VALUES
(1, (SELECT id FROM auth.users LIMIT 1), 5, 'Amazing picture quality and easy setup!'),
(1, (SELECT id FROM auth.users LIMIT 1), 4, 'Great TV but remote could be better'),
(2, (SELECT id FROM auth.users LIMIT 1), 5, 'Best earbuds I have ever owned'),
(3, (SELECT id FROM auth.users LIMIT 1), 4, 'Comfortable and stylish sneakers');
