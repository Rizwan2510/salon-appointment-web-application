import React, { useState } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import {
  TextField,
  Button,
  Box,
  Rating,
  InputLabel,
  Typography,
  IconButton,
  CircularProgress,
  Snackbar,
  Alert
} from "@mui/material";

import { useNavigate, useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { createReview } from "../../../../Redux/Review/action";

const CreateReviewForm = () => {
  const [snackbarOpen, setOpenSnackbar] = useState(false);
  const dispatch = useDispatch();
  const { id } = useParams();
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      reviewText: "",
      reviewRating: 0,
    },
    validationSchema: Yup.object({
      reviewText: Yup.string()
        .required("Review text is required")
        .min(10, "Review must be at least 10 characters long"),
      reviewRating: Yup.number()
        .required("Rating is required")
        .min(0, "Rating must be at least 0")
        .max(5, "Rating cannot be more than 5"),
    }),
    onSubmit: (values) => {
      if (id) {
        dispatch(
          createReview({
            reviewData: values,
            salonId: id,
            jwt: localStorage.getItem("jwt"),
          })
        );
        setOpenSnackbar(true);
      }
    },
  });

  const handleCloseSnackbar = () => {
    setOpenSnackbar(false);
  };

  return (
    <Box
      component="form"
      onSubmit={formik.handleSubmit}
      noValidate
      sx={{ mt: 3 }}
      className="space-y-5 w-full lg:w-1/2"
    >
      <TextField
        fullWidth
        id="reviewText"
        name="reviewText"
        label="Review Text"
        variant="outlined"
        multiline
        rows={4}
        value={formik.values.reviewText}
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        error={formik.touched.reviewText && Boolean(formik.errors.reviewText)}
        helperText={formik.touched.reviewText && formik.errors.reviewText}
      />

      <div className="space-y-2">
        <InputLabel>Rating</InputLabel>
        <Rating
          id="reviewRating"
          name="reviewRating"
          value={formik.values.reviewRating}
          onChange={(event, newValue) =>
            formik.setFieldValue("reviewRating", newValue)
          }
          onBlur={formik.handleBlur}
          precision={0.5}
        />
      </div>
      {formik.touched.reviewRating && formik.errors.reviewRating && (
        <Typography color="error" variant="body2">
          {formik.errors.reviewRating}
        </Typography>
      )}

      <Button color="primary" variant="contained" type="submit">
        Submit Review
      </Button>

      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
        open={snackbarOpen}
        autoHideDuration={6000}
        onClose={handleCloseSnackbar}
      >
        <Alert
          onClose={handleCloseSnackbar}
          severity={false ? "error" : "success"}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {"Review Added"}
        </Alert>
      </Snackbar>
    </Box>
  );
};

export default CreateReviewForm;
