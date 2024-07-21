import { Injectable } from '@nestjs/common';
import * as fs from 'fs';
import * as path from 'path';
import { EmailRecord } from './email-record.interface';

@Injectable()
export class EmailService {
  private readonly dataFilePath = path.join(__dirname, '../../', 'data.json');

  private readData(): EmailRecord[] {
    const rawData = fs.readFileSync(this.dataFilePath, 'utf-8');
    return JSON.parse(rawData);
  }

  async searchEmail(email?: string, number?: string): Promise<EmailRecord[]> {
    await new Promise(resolve => setTimeout(resolve, 5000));

    const data = this.readData();
    return data.filter(record =>
      (!email || record.email === email) &&
      (!number || record.number === number)
    );
  }

  getAllUsers(): EmailRecord[] {
    return this.readData();
  }
}
