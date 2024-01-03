package com.swadeshi.app.controller;

import com.swadeshi.app.model.Cart;
import com.swadeshi.app.services.auth.CartService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/carts")
public class CartController {

    private final CartService cartService;

    public CartController(CartService cartService) {
        this.cartService = cartService;
    }

    @PostMapping
    public ResponseEntity<Cart> addToCart(@RequestBody Cart cart) {
        Cart addedCart = cartService.addToCart(cart);
        return new ResponseEntity<>(addedCart, HttpStatus.CREATED);
    }

    @GetMapping("/{cartId}")
    public ResponseEntity<Cart> getCartItem(@PathVariable Long cartId) {
        Cart cart = cartService.getCartItem(cartId);
        if (cart != null) {
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @PutMapping("/{cartId}")
    public ResponseEntity<Cart> updateCartItem(@PathVariable Long cartId, @RequestBody Cart updatedCart) {
        Cart cart = cartService.updateCartItem(cartId, updatedCart);
        if (cart != null) {
            return new ResponseEntity<>(cart, HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND);
        }
    }

    @DeleteMapping("/{cartId}")
    public ResponseEntity<Void> deleteCartItem(@PathVariable Long cartId) {
        cartService.deleteCartItem(cartId);
        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
