export class GetLastParkingProcessDto {
  _id: string;
  parking: {
    _id: string;
    title: string;
  };
  driver: {
    _id: string;
    carPlate: string;
  };
  payment: {
    currency: string;
    value: number;
  };
  entryCarTime: string;
  departureCarTime: string;
  isCompleted: true;
}
