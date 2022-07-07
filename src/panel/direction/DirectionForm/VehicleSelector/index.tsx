import React from 'react';
import classnames from 'classnames';
import VehicleSelectorButton from './VehicleSelectorButton';

export type VehicleSelectorProps = {
  vehicles: ('driving' | 'walking' | 'cycling' | 'publicTransport')[];
  activeVehicle: string;
  onSelectVehicle: (vehicle: string) => void;
};

const VehicleSelector: React.FunctionComponent<VehicleSelectorProps> = ({
  vehicles,
  activeVehicle,
  onSelectVehicle,
}) => (
  <div
    className={classnames('vehicleSelector', {
      'vehicleSelector--withPublicTransport': vehicles.length > 3,
    })}
    role="radiogroup"
  >
    {vehicles.map(vehicle => (
      <VehicleSelectorButton
        key={vehicle}
        vehicle={vehicle}
        isActive={vehicle === activeVehicle}
        onClick={() => onSelectVehicle(vehicle)}
      />
    ))}
  </div>
);

export default VehicleSelector;
