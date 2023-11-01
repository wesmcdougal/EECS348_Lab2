# Set the base image to use
FROM gcc:latest
# Copy the C program into the container
COPY NFL_score_calc.c .
# Compile the C program
RUN gcc -o NFL_score_calc NFL_score_calc.c
# Set the command to run when the container starts
CMD ["./NFL_score_calc"]
