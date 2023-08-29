import { Controller, Get } from '@nestjs/common';
import { MarkdownService } from './markdown.service';

@Controller('markdown')
export class MarkdownController {
  constructor(private readonly markdownService: MarkdownService) {}

  @Get('get-image')
  async getImage(): Promise<string> {
    return await this.markdownService.getImage();
  }
}
