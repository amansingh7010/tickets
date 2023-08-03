import { Publisher, Subjects, TicketUpdatedEvent } from '@asinghs/common';

export class TicketUpdatedPublisher extends Publisher<TicketUpdatedEvent> {
  readonly subject = Subjects.TicketUpdated;
}
