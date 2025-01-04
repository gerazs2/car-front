import DialogContent from "@mui/material/DialogContent";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { Car } from "../types/types";
import Grid from "@mui/material/Grid/Grid";

type DialogFormProps = {
  car: Car;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
};

function CarDialogContent({ car, handleChange }: DialogFormProps) {
  return (
    <>
      <DialogContent>
        
      <Grid container spacing={2} mt={2}> {/* Use Grid container */}
          <Grid item xs={12} sm={6}> {/* xs: full width on small screens, sm: half width on medium screens and above */}
            <TextField
              label="Brand"
              name="brand"
              value={car.brand}
              onChange={handleChange}
              fullWidth // Makes the text field use the full width of the grid item
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Model"
              name="model"
              value={car.model}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Color"
              name="color"
              value={car.color}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Year"
              name="modelYear"
              value={car.modelYear}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Reg.nr."
              name="registrationNumber"
              value={car.registrationNumber}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <TextField
              label="Price"
              name="price"
              value={car.price}
              onChange={handleChange}
              fullWidth
            />
          </Grid>
        </Grid>
      </DialogContent>
    </>
  );
}
export default CarDialogContent;
