import Application from '@ioc:Adonis/Core/Application';
import { EventType } from 'Contracts/Event';
import path from 'path';
import { readFile, writeFile } from 'node:fs/promises';
import Utils from './Utils';
import { DateTime } from 'luxon';

export type ResponseType = Partial<{
  status: 'success' | 'error';
  message: string;
  data: Record<string, unknown>;
}>;

class EventsService {
  private path(): string {
    return path.join(Application.appRoot, '/db/event.json');
  }

  public async add(data: Omit<EventType, 'id' | 'createdAt' | 'updatedAr'>): Promise<ResponseType> {
    try {
      const eventsBuffer = await readFile(this.path());
      let events: EventType[] = JSON.parse(eventsBuffer as unknown as string);
      events.push({ ...data, id: Utils.uniqueId(), createdAt: DateTime.now(), updatedAt: DateTime.now() });
      await writeFile(this.path(), JSON.stringify(events));
      return {
        status: 'success',
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message ?? error.messages ?? 'Something went wrong',
      };
    }
  }

  public async update(data: Partial<Omit<EventType, 'createdAt' | 'updatedAr'>>): Promise<ResponseType> {
    try {
      const eventsBuffer = await readFile(this.path());
      const events: EventType[] = JSON.parse(eventsBuffer as unknown as string);
      const updatedEvents: EventType[] = [];
      let status: string = 'error';
      for (const event of events) {
        if (event.id === data.id) {
          status = 'success';
          updatedEvents.push({ ...event, ...data, updatedAt: DateTime.now() });
        }
        else updatedEvents.push(event);
      }
      await writeFile(this.path(), JSON.stringify(updatedEvents));
      return {
        status,
      } as ResponseType;
    } catch (error) {
      return {
        status: 'error',
        message: error.message ?? error.messages ?? 'Something went wrong',
      };
    }
  }

  public async delete(id: string): Promise<ResponseType> {
    try {
      const eventsBuffer = await readFile(this.path());
      const events: EventType[] = JSON.parse(eventsBuffer as unknown as string);
      const updatedEvents: EventType[] = [];
      for (const event of events) {
        if (event.id === id) continue;
        else updatedEvents.push(event);
      }
      await writeFile(this.path(), JSON.stringify(updatedEvents));
      return {
        status: 'success',
      };
    } catch (error) {
      return {
        status: 'error',
        message: error.message ?? error.messages ?? 'Something went wrong',
      };
    }
  }

  public async fetch(id: string): Promise<EventType | {}> {
    try {
      const eventsBuffer = await readFile(this.path());
      const events: EventType[] = JSON.parse(eventsBuffer as unknown as string);
      let data: Partial<EventType> = {};
      for (const event of events) {
        if (event.id === id) data = event;
      }
      return data;
    } catch (error) {
      return {};
    }
  }

  public async fetchAll(): Promise<EventType[]> {
    try {
      return (await readFile(this.path())) as unknown as EventType[];
    } catch (error) {
      return [];
    }
  }
}

export default new EventsService();
