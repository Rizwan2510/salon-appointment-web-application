package com.zosh.config;

import org.springframework.cloud.gateway.route.RouteLocator;
import org.springframework.cloud.gateway.route.builder.RouteLocatorBuilder;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class GatewayRoutesConfig {
    @Bean
    public RouteLocator customRouteLocator(RouteLocatorBuilder builder) {
        return builder.routes()
                .route("SALON", r -> r.path("/salons/**", "/api/salons/**", "/api/admin/salons/**").uri("lb://SALON"))
                .route("USER", r -> r.path("/auth/**", "/api/admin/users/**", "/api/users/**", "/users/**").uri("lb://USER"))
                .route("SERVICE-OFFERING", r -> r.path("/api/service-offering/**").uri("lb://SERVICE-OFFERING"))
                .route("CATEGORY", r -> r.path("/api/categories/**").uri("lb://CATEGORY"))
                .route("BOOKING", r -> r.path("/api/bookings/**").uri("lb://BOOKING"))
                .route("PAYMENT", r -> r.path("/api/payments/**").uri("lb://PAYMENT"))
                .route("NOTIFICATION", r -> r.path("/api/notifications/**").uri("lb://NOTIFICATION"))
                .route("REVIEW", r -> r.path("/api/reviews/**").uri("lb://REVIEW"))
                .build();
    }
}
