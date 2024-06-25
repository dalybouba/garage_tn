import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { UserService } from "./user.service";
import { CreateUserDto } from "./create-user.dto";
import { UserRole } from "./user.schema";

@Controller("user")
export class UserController {
    constructor(private readonly userService: UserService) { }

    @Post()
    async create(@Body() createUserDto: CreateUserDto) {
        return this.userService.create(createUserDto);
    }
    @Get()
    async findAll() {
        return this.userService.findAll();
    }

    @Get("role/:role")
    async findByRole(@Param("role") role: UserRole) {
        return this.userService.findByRole(role);
    }
}
