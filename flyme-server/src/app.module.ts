import { Flight } from './flights/flight.entity';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { FlightsModule } from './flights/flights.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'psql',
      database: 'transportation',
      entities: [Flight],
      synchronize: true,
    }),
    FlightsModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
