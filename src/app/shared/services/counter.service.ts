export class CounterService {
  activetoInactiveCounter = 0;
  inactivetoActiveCounter = 0;

  incrementActiveToInactive() {
    this.activetoInactiveCounter++;
    console.log('activetoInactive', this.activetoInactiveCounter);
  }

  incrementInactiveToActive() {
    this.inactivetoActiveCounter++;
    console.log('inactivetoActive', this.inactivetoActiveCounter);
  }
}
