import { Body, Controller, Post, Get } from '@nestjs/common';
import { EmailService } from './email.service';
import { EmailRecord } from "./email-record.interface";

@Controller()
export class EmailController {
  constructor(private readonly emailService: EmailService) {}

  @Post('search')
  searchEmail(@Body() body: { email?: string, number?: string }): Promise<EmailRecord[]> {
    const { email, number } = body;
    return this.emailService.searchEmail(email, number);
  }

  @Get()
  getAllUsers(): EmailRecord[] {
    return this.emailService.getAllUsers();
  }
}
