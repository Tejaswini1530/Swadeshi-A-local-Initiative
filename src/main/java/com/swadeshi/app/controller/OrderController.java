package com.swadeshi.app.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import com.swadeshi.app.model.Order;
import com.swadeshi.app.model.Product;
import com.swadeshi.app.services.auth.OrderService;

import java.util.List;

@RestController
@RequestMapping("/api/orders")
public class OrderController {

    private final OrderService orderService;

    @Autowired
    public OrderController(OrderService orderService) {
        this.orderService = orderService;
    }

    @GetMapping
    public List<Order> getAllOrders() {
        return orderService.getAllOrders();
    }

    @GetMapping("/{id}")
    public ResponseEntity<Order> getOrderById(@PathVariable Long id) {
        Order order = orderService.getOrderById(id);
        if (order != null) {
            return ResponseEntity.ok(order);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @PostMapping
    public ResponseEntity<Order> createOrder(@RequestBody Order order) {
        Order createdOrder = orderService.createOrder(order);
        return ResponseEntity.ok(createdOrder);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Order> updateOrder(@PathVariable Long id, @RequestBody Order updatedOrder) {
        Order result = orderService.updateOrder(id, updatedOrder);
        if (result != null) {
            return ResponseEntity.ok(result);
        } else {
            return ResponseEntity.notFound().build();
        }
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteOrder(@PathVariable Long id) {
        orderService.deleteOrder(id);
        return ResponseEntity.noContent().build();
    }
    
    @GetMapping("/orderByUserIdAndorderStatus")
    public List<Order> getUserOrders(
            @RequestParam(name = "userId") Long userId ,
            @RequestParam(name = "orderStatus") String orderStatus)
    {
        return orderService.getAllOrdersByUserIdAndOrderStatus(userId, orderStatus);
    }
    
    @GetMapping("/orderBySellerIdAndorderStatus")
    public List<Order> getSellerOrders(
            @RequestParam(name = "sellerId") Long sellerId ,
            @RequestParam(name = "orderStatus") String orderStatus)
    {
        return orderService.getAllOrdersBySellerIdAndOrderStatus(sellerId, orderStatus);
    }
    
    @GetMapping("/orderByUserId")
    public List<Order> getOrdersForUser(
            @RequestParam(name = "userId") Long userId)
    {
        return orderService.getAllOrdersByUserId(userId);
    }
    
    @GetMapping("/orderBySellerId")
    public List<Order> getOrdersForSeller(
            @RequestParam(name = "sellerId") Long sellerId)
    {
        return orderService.getAllOrdersByUserId(sellerId);
    }
    
   
}