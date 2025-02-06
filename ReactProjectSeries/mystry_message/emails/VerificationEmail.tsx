import { Html, Head, Body, Container, Text, Button, Section } from "@react-email/components";

interface VerificationEmailProps {
  username: string;
  otp: string;  // Only OTP is now included as a prop
}

export default function VerificationEmail({
  username,
  otp,
}: VerificationEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={{ backgroundColor: "#f4f4f4", padding: "20px", fontFamily: "Arial, sans-serif" }}>
        <Container
          style={{
            backgroundColor: "#ffffff",
            padding: "20px",
            borderRadius: "8px",
            boxShadow: "0 2px 8px rgba(0,0,0,0.1)",
          }}
        >
          <Section>
            <Text style={{ fontSize: "20px", fontWeight: "bold", marginBottom: "10px" }}>
              Hello, {username}!
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              Thank you for signing up. Please use the OTP below to verify your email address:
            </Text>
            <Text style={{ fontSize: "16px", marginBottom: "20px" }}>
              Your OTP: <strong>{otp}</strong>
            </Text>
            <Text style={{ fontSize: "12px", color: "#666", marginTop: "20px" }}>
              If you did not create an account, you can ignore this email.
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
