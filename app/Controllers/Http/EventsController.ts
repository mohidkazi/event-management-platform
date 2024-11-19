import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext';
import EventsService, { ResponseType } from 'App/Services/EventsService';
import { EventType } from 'Contracts/Event';

export default class EventsController {
  public async add(ctx: HttpContextContract): Promise<ResponseType> {
    const data = ctx.request.body();
    return EventsService.add(data as EventType);
  }

  public async update(ctx: HttpContextContract): Promise<ResponseType> {
    const data = ctx.request.body();
    return EventsService.update(data as Partial<EventType>);
  }

  public async delete(ctx: HttpContextContract): Promise<ResponseType> {
    const { id } = ctx.request.qs();
    return EventsService.delete(id);
  }

  public async fetch(ctx: HttpContextContract): Promise<EventType | {}> {
    const { id } = ctx.request.qs();
    return EventsService.fetch(id);
  }

  public async fetchAll(): Promise<EventType[]> {
    return EventsService.fetchAll();
  }
}
