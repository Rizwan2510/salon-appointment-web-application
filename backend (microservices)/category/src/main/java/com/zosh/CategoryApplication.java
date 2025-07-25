package com.zosh;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.cloud.openfeign.EnableFeignClients;

@SpringBootApplication
@EnableFeignClients
public class CategoryApplication {

	public static void main(String[] args) {

		SpringApplication.run(CategoryApplication.class, args);
	}

}
