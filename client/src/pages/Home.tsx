import { Link } from "react-router-dom";
import {
  Box,
  Flex,
  Heading,
  Text,
  Grid,
  Button,
  Badge,
  type ModelData,
} from "@/shared/ui/design-system/components";
import { useTheme } from "@/shared/ui/design-system";
import {
  RocketIcon,
  GitHubLogoIcon,
  Share1Icon,
  CodeIcon,
  CubeIcon,
  LayersIcon,
  Pencil1Icon,
} from "@radix-ui/react-icons";

export function Home() {
  const { theme } = useTheme();

  return (
    <Box
      style={{
        maxWidth: "1400px",
        margin: "0 auto",
        padding: `0 ${theme.spacing.base[4]}`,
      }}
    >
      {/* Compact Hero Section */}
      <Box py="6" mb="4">
        <Flex direction="column" align="center" gap="3" mb="4">
          <Heading
            size="7"
            align="center"
            style={{
              fontWeight: theme.typography.h1.fontWeight,
              background: theme.gradients.primary,
              WebkitBackgroundClip: "text",
              WebkitTextFillColor: "transparent",
              backgroundClip: "text",
              maxWidth: "900px",
              lineHeight: "1.2",
            }}
          >
            Trustworthy Deep Learning Inference Framework using Blockchain
          </Heading>

          <Text
            size="3"
            align="center"
            style={{
              maxWidth: "700px",
              color: theme.colors.text.secondary,
              lineHeight: "1.4",
            }}
          >
            Scalable On-Chain DNN Inference Algorithm
          </Text>

          <Flex gap="3" mt="3">
            <Link to="/models">
              <Box
                style={{
                  display: "inline-block",
                  transition: "all 0.2s ease",
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  const button = e.currentTarget.querySelector("button");
                  if (button) {
                    button.style.background = theme.colors.interactive.accent;
                    button.style.boxShadow = `0 4px 12px ${theme.colors.interactive.accent}35`;
                    button.style.transform = "translateY(-1px)";
                  }
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  const button = e.currentTarget.querySelector("button");
                  if (button) {
                    button.style.background = theme.colors.interactive.primary;
                    button.style.boxShadow = `0 2px 8px ${theme.colors.interactive.primary}25`;
                    button.style.transform = "translateY(0)";
                  }
                }}
              >
                <Button
                  variant="primary"
                  size="md"
                  style={{
                    fontSize: theme.typography.bodySmall.fontSize,
                    padding: `${theme.spacing.base[2]} ${theme.spacing.base[4]}`,
                    height: "40px",
                    background: theme.colors.interactive.primary,
                    color: theme.colors.text.inverse,
                    border: "none",
                    borderRadius: theme.borders.radius.sm,
                    boxShadow: `0 2px 8px ${theme.colors.interactive.primary}25`,
                    transition: "all 0.2s ease",
                    fontWeight: 600,
                  }}
                >
                  Explore Models
                </Button>
              </Box>
            </Link>
          </Flex>
        </Flex>
      </Box>

      {/* Main Content Grid */}
      <Grid columns={{ initial: "1", lg: "4" }} gap="4" mb="6">
        {/* Featured Models - Takes 3 columns */}
        <Box style={{ gridColumn: "span 3" }}>
          <Flex justify="between" align="center" mb="3">
            <Heading
              size="4"
              style={{
                fontWeight: theme.typography.h3.fontWeight,
                color: theme.colors.text.primary,
              }}
            >
              Featured Models
            </Heading>
          </Flex>

          <Grid columns={{ initial: "1", sm: "2", lg: "3" }} gap="3">
            {featuredModels.slice(0, 6).map(model => (
              <Box
                key={model.id}
                style={{
                  background: theme.colors.background.card,
                  borderRadius: theme.borders.radius.md,
                  border: `1px solid ${theme.colors.border.primary}`,
                  padding: theme.spacing.base[3],
                  cursor: "pointer",
                  transition: "all 0.2s ease",
                  boxShadow: theme.shadows.semantic.card.low,
                }}
                onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.interactive.primary;
                  e.currentTarget.style.boxShadow = theme.shadows.semantic.card.medium;
                  e.currentTarget.style.transform = "translateY(-2px)";
                }}
                onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                  e.currentTarget.style.borderColor = theme.colors.border.primary;
                  e.currentTarget.style.boxShadow = theme.shadows.semantic.card.low;
                  e.currentTarget.style.transform = "translateY(0)";
                }}
              >
                <Flex direction="column" gap="2">
                  <Text
                    size="2"
                    style={{
                      fontWeight: 600,
                      color: theme.colors.text.primary,
                      lineHeight: "1.3",
                    }}
                  >
                    {model.name}
                  </Text>
                  <Text
                    size="1"
                    style={{
                      color: theme.colors.text.secondary,
                      lineHeight: "1.4",
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                    }}
                  >
                    {model.description}
                  </Text>
                  <Flex justify="between" align="center" mt="1">
                    <Badge
                      style={{
                        background: `${theme.colors.interactive.accent}15`,
                        color: theme.colors.interactive.accent,
                        border: `1px solid ${theme.colors.interactive.accent}30`,
                        padding: "2px 6px",
                        borderRadius: theme.borders.radius.sm,
                        fontSize: "10px",
                        fontWeight: 500,
                      }}
                    >
                      {model.task}
                    </Badge>
                    <Flex align="center" gap="3">
                      <Text size="1" style={{ color: theme.colors.text.tertiary }}>
                        {model.downloads}↓
                      </Text>
                      <Text size="1" style={{ color: theme.colors.text.tertiary }}>
                        {model.likes}♡
                      </Text>
                    </Flex>
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Infrastructure Info - Takes 1 column */}
        <Box>
          <Heading
            size="4"
            mb="3"
            style={{
              fontWeight: theme.typography.h3.fontWeight,
              color: theme.colors.text.primary,
            }}
          >
            Infrastructure
          </Heading>

          <Flex direction="column" gap="3">
            <Box
              style={{
                padding: theme.spacing.base[3],
                background: theme.colors.background.card,
                borderRadius: theme.borders.radius.md,
                border: `1px solid ${theme.colors.border.primary}`,
                boxShadow: theme.shadows.semantic.card.low,
              }}
            >
              <Flex align="center" gap="2" mb="2">
                <CubeIcon
                  width="16"
                  height="16"
                  style={{ color: theme.colors.interactive.primary }}
                />
                <Text
                  size="2"
                  style={{
                    fontWeight: theme.typography.label.fontWeight,
                    color: theme.colors.text.primary,
                  }}
                >
                  Sui Network
                </Text>
              </Flex>
              <Text
                size="1"
                style={{
                  color: theme.colors.text.secondary,
                  lineHeight: "1.4",
                }}
              >
                Object-native DNN execution with immutable inference
              </Text>
            </Box>
          </Flex>
        </Box>
      </Grid>

      {/* Compact Features Section */}
      <Box py="5" mb="4">
        <Heading
          size="4"
          mb="4"
          align="center"
          style={{
            fontWeight: theme.typography.h3.fontWeight,
            color: theme.colors.text.primary,
          }}
        >
          AI x Blockchain
        </Heading>

        <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="3">
          <Box
            style={{
              padding: theme.spacing.base[3],
              background: theme.colors.background.card,
              borderRadius: theme.borders.radius.md,
              border: `1px solid ${theme.colors.border.primary}`,
              textAlign: "center",
            }}
          >
            {/* <RocketIcon
              width="20"
              height="20"
              style={{ color: theme.colors.interactive.primary, margin: "0 auto 8px" }}
            /> */}
            <Text
              size="2"
              style={{
                fontWeight: theme.typography.label.fontWeight,
                color: theme.colors.text.primary,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Transparency
            </Text>
            <Text
              size="1"
              style={{
                color: theme.colors.text.secondary,
                lineHeight: "1.3",
              }}
            >
              On-chain DL ensures transparency by immutably recording the entire inference process, allowing anyone to verify model fairness and trace decision origins.
            </Text>
          </Box>

          <Box
            style={{
              padding: theme.spacing.base[3],
              background: theme.colors.background.card,
              borderRadius: theme.borders.radius.md,
              border: `1px solid ${theme.colors.border.primary}`,
              textAlign: "center",
            }}
          >
            {/* <Share1Icon
              width="20"
              height="20"
              style={{ color: theme.colors.interactive.accent, margin: "0 auto 8px" }}
            /> */}
            <Text
              size="2"
              style={{
                fontWeight: theme.typography.label.fontWeight,
                color: theme.colors.text.primary,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Immutability
            </Text>
            <Text
              size="1"
              style={{
                color: theme.colors.text.secondary,
                lineHeight: "1.3",
              }}
            >
              Once deployed, on-chain DL models cannot be altered, preventing tampering and preserving integrity.
            </Text>
          </Box>

          <Box
            style={{
              padding: theme.spacing.base[3],
              background: theme.colors.background.card,
              borderRadius: theme.borders.radius.md,
              border: `1px solid ${theme.colors.border.primary}`,
              textAlign: "center",
            }}
          >
            {/* <CodeIcon
              width="20"
              height="20"
              style={{ color: theme.colors.status.success, margin: "0 auto 8px" }}
            /> */}
            <Text
              size="2"
              style={{
                fontWeight: theme.typography.label.fontWeight,
                color: theme.colors.text.primary,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Accountability
            </Text>
            <Text
              size="1"
              style={{
                color: theme.colors.text.secondary,
                lineHeight: "1.3",
              }}
            >
              Every action in on-chain DL is logged on the blockchain, enabling clear responsibility tracing in case of disputes.
            </Text>
          </Box>

          <Box
            style={{
              padding: theme.spacing.base[3],
              background: theme.colors.background.card,
              borderRadius: theme.borders.radius.md,
              border: `1px solid ${theme.colors.border.primary}`,
              textAlign: "center",
            }}
          >
            {/* <GitHubLogoIcon
              width="20"
              height="20"
              style={{ color: theme.colors.text.secondary, margin: "0 auto 8px" }}
            /> */}
            <Text
              size="2"
              style={{
                fontWeight: theme.typography.label.fontWeight,
                color: theme.colors.text.primary,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Reproducibility
            </Text>
            <Text
              size="1"
              style={{
                color: theme.colors.text.secondary,
                lineHeight: "1.3",
              }}
            >
              On-chain DL guarantees identical results under the same conditions, ensuring technical, legal, and scientific reproducibility.
            </Text>
          </Box>

          {/* <Box
            style={{
              padding: theme.spacing.base[3],
              background: theme.colors.background.card,
              borderRadius: theme.borders.radius.md,
              border: `1px solid ${theme.colors.border.primary}`,
              textAlign: "center",
            }} */}
          {/* > */}
            {/* <GitHubLogoIcon
              width="20"
              height="20"
              style={{ color: theme.colors.text.secondary, margin: "0 auto 8px" }}
            /> */}
            {/* <Text
              size="2"
              style={{
                fontWeight: theme.typography.label.fontWeight,
                color: theme.colors.text.primary,
                display: "block",
                marginBottom: "4px",
              }}
            >
              Decentralization
            </Text>
            <Text
              size="1"
              style={{
                color: theme.colors.text.secondary,
                lineHeight: "1.3",
              }}
            >
              By removing central control, on-chain DL ensures global, censorship-resistant access to AI services with high availability.
            </Text> */}
          {/* </Box> */}
        </Grid>
      </Box>
    </Box>
  );
}

// Featured models data (matching ModelData interface)
const featuredModels: ModelData[] = [
  {
      id: "1",
      name: "MNIST Classifier",
      description: "Onchain DNN models",
      creator: "0x1234...5678",
      downloads: 0,
      likes: 0,
      task: "Computer Vision",
      frameworks: ["TensorFlow", "SUI"],
    }
]
