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
  ArrowRightIcon,
  LightningBoltIcon,
  GearIcon,
  StarFilledIcon,
} from "@radix-ui/react-icons";

export function Home() {
  const { theme } = useTheme();

  return (
    <Box style={{ minHeight: "100vh", overflow: "hidden" }}>
      {/* Hero Section with Diagonal Background */}
      <Box
        style={{
          position: "relative",
          background: `linear-gradient(135deg, ${theme.colors.background.primary} 0%, ${theme.colors.background.secondary} 50%, ${theme.colors.interactive.primary}15 100%)`,
          minHeight: "80vh",
          display: "flex",
          alignItems: "center",
          overflow: "hidden",
        }}
      >
        {/* Geometric Background Elements */}
        <Box
          style={{
            position: "absolute",
            top: "-20%",
            right: "-10%",
            width: "600px",
            height: "600px",
            background: `linear-gradient(45deg, ${theme.colors.interactive.primary}08, ${theme.colors.interactive.accent}12)`,
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />
        <Box
          style={{
            position: "absolute",
            bottom: "-30%",
            left: "-15%",
            width: "800px",
            height: "800px",
            background: `linear-gradient(-45deg, ${theme.colors.interactive.accent}06, ${theme.colors.status.success}08)`,
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />

        <Box
          style={{
            maxWidth: "1400px",
            width: "100%",
            margin: "0 auto",
            padding: `0 ${theme.spacing.base[4]}`,
            position: "relative",
            zIndex: 2,
          }}
        >
          <Grid columns={{ initial: "1", lg: "2" }} gap="8" align="center">
            {/* Hero Content */}
            <Flex direction="column" gap="6">
              <Box>
                <Badge
                  style={{
                    background: `${theme.colors.interactive.primary}15`,
                    color: theme.colors.interactive.primary,
                    border: `1px solid ${theme.colors.interactive.primary}30`,
                    padding: "8px 16px",
                    borderRadius: "50px",
                    fontSize: "13px",
                    fontWeight: 600,
                    marginBottom: theme.spacing.base[4],
                    display: "inline-flex",
                    alignItems: "center",
                    gap: "8px",
                  }}
                >
                  <LightningBoltIcon width="14" height="14" />
                  AI x Blockchain
                </Badge>
                
                <Heading
                  size="8"
                  style={{
                    fontWeight: 800,
                    background: `linear-gradient(135deg, ${theme.colors.text.primary}, ${theme.colors.interactive.primary})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    lineHeight: "1.1",
                    marginBottom: theme.spacing.base[4],
                    letterSpacing: "-0.02em",
                  }}
                >
                  Onchain Trustworthy
                  <br />
                  <span style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.interactive.accent}, ${theme.colors.status.success})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Deep Neural Network Inference
                  </span>
                </Heading>
                
                <Text
                  size="4"
                  style={{
                    color: theme.colors.text.secondary,
                    lineHeight: "1.6",
                    maxWidth: "500px",
                    marginBottom: theme.spacing.base[6],
                  }}
                >
                  Deploy and execute deep learning models directly on Sui blockchain. 
                  Guaranteed immutable inference with verifiable results.
                </Text>
              </Box>

              <Flex gap="4" wrap="wrap">
                <Link 
                  to="/models" 
                  style={{ 
                    textDecoration: "none",
                    display: "inline-block",
                    background: `linear-gradient(135deg, ${theme.colors.interactive.primary}, ${theme.colors.interactive.accent})`,
                    color: theme.colors.text.inverse,
                    border: "none",
                    padding: "16px 32px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                    boxShadow: `0 8px 25px ${theme.colors.interactive.primary}30`,
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = "translateY(-2px)";
                    e.currentTarget.style.boxShadow = `0 12px 35px ${theme.colors.interactive.primary}40`;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLAnchorElement>) => {
                    e.currentTarget.style.transform = "translateY(0)";
                    e.currentTarget.style.boxShadow = `0 8px 25px ${theme.colors.interactive.primary}30`;
                  }}
                >
                  <Flex align="center" gap="2">
                    Explore Models
                    <ArrowRightIcon width="16" height="16" />
                  </Flex>
                </Link>
                
                <Box
                  style={{
                    display: "inline-block",
                    background: "transparent",
                    color: theme.colors.text.primary,
                    border: `2px solid ${theme.colors.border.primary}`,
                    padding: "14px 28px",
                    borderRadius: "50px",
                    fontSize: "16px",
                    fontWeight: 600,
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                  onMouseEnter={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = theme.colors.interactive.primary;
                    e.currentTarget.style.color = theme.colors.interactive.primary;
                  }}
                  onMouseLeave={(e: React.MouseEvent<HTMLDivElement>) => {
                    e.currentTarget.style.borderColor = theme.colors.border.primary;
                    e.currentTarget.style.color = theme.colors.text.primary;
                  }}
                >
                  <Flex align="center" gap="2">
                    <GitHubLogoIcon width="16" height="16" />
                    Documentation
                  </Flex>
                </Box>
              </Flex>
            </Flex>

            {/* Hero Visual */}
            <Box
              style={{
                position: "relative",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Box
                style={{
                  width: "400px",
                  height: "400px",
                  background: `linear-gradient(135deg, ${theme.colors.interactive.primary}20, ${theme.colors.interactive.accent}15)`,
                  borderRadius: "50%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                  border: `1px solid ${theme.colors.border.primary}30`,
                  backdropFilter: "blur(20px)",
                }}
              >
                <Grid columns="3" gap="4" style={{ width: "200px" }}>
                  {[...Array(9)].map((_, i) => (
                    <Box
                      key={i}
                      style={{
                        width: "40px",
                        height: "40px",
                        background: i % 3 === 0 
                          ? `linear-gradient(135deg, ${theme.colors.interactive.primary}, ${theme.colors.interactive.accent})`
                          : theme.colors.background.card,
                        borderRadius: "12px",
                        border: `1px solid ${theme.colors.border.primary}`,
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        boxShadow: theme.shadows.semantic.card.medium,
                        animation: `float ${2 + i * 0.3}s ease-in-out infinite`,
                      }}
                    >
                      {i % 3 === 0 && (
                        <GearIcon
                          width="16"
                          height="16"
                          style={{ color: theme.colors.text.inverse }}
                        />
                      )}
                    </Box>
                  ))}
                </Grid>
              </Box>
            </Box>
          </Grid>
        </Box>
      </Box>

      {/* Main Content */}
      <Box
        style={{
          maxWidth: "1400px",
          margin: "0 auto",
          padding: `${theme.spacing.base[8]} ${theme.spacing.base[4]}`,
        }}
      >
        {/* Featured Models - Modern Card Layout */}
        <Box mb="12">
          <Flex direction="column" align="center" gap="2" mb="8">
            <Badge
              style={{
                background: `${theme.colors.status.success}15`,
                color: theme.colors.status.success,
                border: `1px solid ${theme.colors.status.success}30`,
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
              }}
            >
              FEATURED
            </Badge>
            <Heading
              size="6"
              style={{
                fontWeight: 700,
                color: theme.colors.text.primary,
                textAlign: "center",
              }}
            >
              Popular AI Models
            </Heading>
            <Text
              size="3"
              style={{
                color: theme.colors.text.secondary,
                textAlign: "center",
                maxWidth: "600px",
              }}
            >
              Explore deep neural networks optimized for onchain inference
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="6">
            {featuredModels.slice(0, 4).map((model, index) => (
              <Box
                key={model.id}
                style={{
                  background: theme.colors.background.card,
                  borderRadius: "24px",
                  border: `1px solid ${theme.colors.border.primary}`,
                  padding: "24px",
                  cursor: "pointer",
                  transition: "all 0.4s ease",
                  boxShadow: theme.shadows.semantic.card.low,
                  position: "relative",
                  overflow: "hidden",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-8px)";
                  e.currentTarget.style.boxShadow = theme.shadows.semantic.card.high;
                  e.currentTarget.style.borderColor = theme.colors.interactive.primary;
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = theme.shadows.semantic.card.low;
                  e.currentTarget.style.borderColor = theme.colors.border.primary;
                }}
              >
                {/* Gradient Overlay */}
                <Box
                  style={{
                    position: "absolute",
                    top: 0,
                    left: 0,
                    right: 0,
                    height: "4px",
                    background: `linear-gradient(90deg, ${theme.colors.interactive.primary}, ${theme.colors.interactive.accent})`,
                  }}
                />
                
                <Flex direction="column" gap="4">
                  <Flex justify="between" align="start">
                    <Box
                      style={{
                        width: "48px",
                        height: "48px",
                        background: `${theme.colors.interactive.primary}15`,
                        borderRadius: "16px",
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                      }}
                    >
                      <GearIcon
                        width="20"
                        height="20"
                        style={{ color: theme.colors.interactive.primary }}
                      />
                    </Box>
                    
                    <Badge
                      style={{
                        background: `${theme.colors.interactive.accent}15`,
                        color: theme.colors.interactive.accent,
                        border: `1px solid ${theme.colors.interactive.accent}30`,
                        padding: "4px 8px",
                        borderRadius: "12px",
                        fontSize: "10px",
                        fontWeight: 600,
                      }}
                    >
                      {model.task}
                    </Badge>
                  </Flex>
                  
                  <Box>
                    <Text
                      size="3"
                      style={{
                        fontWeight: 700,
                        color: theme.colors.text.primary,
                        marginBottom: "8px",
                      }}
                    >
                      {model.name}
                    </Text>
                    <Text
                      size="2"
                      style={{
                        color: theme.colors.text.secondary,
                        lineHeight: "1.5",
                        display: "-webkit-box",
                        WebkitLineClamp: 2,
                        WebkitBoxOrient: "vertical",
                        overflow: "hidden",
                      }}
                    >
                      {model.description}
                    </Text>
                  </Box>
                  
                  <Flex justify="between" align="center">
                    <Flex gap="3">
                      <Flex align="center" gap="1">
                        <StarFilledIcon width="12" height="12" style={{ color: theme.colors.status.warning }} />
                        <Text size="1" style={{ color: theme.colors.text.tertiary, fontWeight: 500 }}>
                          {model.likes}
                        </Text>
                      </Flex>
                      <Flex align="center" gap="1">
                        <ArrowRightIcon width="12" height="12" style={{ color: theme.colors.text.tertiary }} />
                        <Text size="1" style={{ color: theme.colors.text.tertiary, fontWeight: 500 }}>
                          {model.downloads}
                        </Text>
                      </Flex>
                    </Flex>
                    
                    <ArrowRightIcon
                      width="16"
                      height="16"
                      style={{
                        color: theme.colors.text.tertiary,
                        transition: "transform 0.3s ease",
                      }}
                    />
                  </Flex>
                </Flex>
              </Box>
            ))}
          </Grid>
        </Box>

        {/* Infrastructure - Split Layout */}
        <Grid columns={{ initial: "1", lg: "2" }} gap="12" align="center" mb="12">
          <Box>
            <Badge
              style={{
                background: `${theme.colors.interactive.primary}15`,
                color: theme.colors.interactive.primary,
                border: `1px solid ${theme.colors.interactive.primary}30`,
                padding: "6px 12px",
                borderRadius: "20px",
                fontSize: "12px",
                fontWeight: 600,
                marginBottom: theme.spacing.base[4],
              }}
            >
              INFRASTRUCTURE
            </Badge>
            
            <Heading
              size="6"
              style={{
                fontWeight: 700,
                color: theme.colors.text.primary,
                marginBottom: theme.spacing.base[4],
              }}
            >
              Built for Scale
            </Heading>
            
                         <Text
               size="3"
               style={{
                 color: theme.colors.text.secondary,
                 lineHeight: "1.6",
                 marginBottom: theme.spacing.base[6],
               }}
             >
               Purpose-built infrastructure for deploying and executing deep neural networks 
               with fully onchain matrix computations and verifiable inference.
             </Text>

            <Flex direction="column" gap="4">
              <Flex align="center" gap="3">
                <Box
                  style={{
                    width: "40px",
                    height: "40px",
                    background: `${theme.colors.interactive.primary}15`,
                    borderRadius: "12px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <LightningBoltIcon
                    width="16"
                    height="16"
                    style={{ color: theme.colors.interactive.primary }}
                  />
                </Box>
                <Box>
                                     <Text
                     size="2"
                     style={{
                       fontWeight: 600,
                       color: theme.colors.text.primary,
                       marginBottom: "4px",
                     }}
                   >
                     Matrix Operations Onchain
                   </Text>
                   <Text
                     size="1"
                     style={{
                       color: theme.colors.text.secondary,
                     }}
                   >
                     Dense layer computations with transparent weights & biases
                   </Text>
                </Box>
              </Flex>

              <Flex align="center" gap="3">
                                 <Box
                   style={{
                     width: "40px",
                     height: "40px",
                     background: `${theme.colors.interactive.accent}15`,
                     borderRadius: "12px",
                     display: "flex",
                     alignItems: "center",
                     justifyContent: "center",
                   }}
                 >
                   <CodeIcon
                     width="16"
                     height="16"
                     style={{ color: theme.colors.interactive.accent }}
                   />
                 </Box>
                 <Box>
                   <Text
                     size="2"
                     style={{
                       fontWeight: 600,
                       color: theme.colors.text.primary,
                       marginBottom: "4px",
                     }}
                   >
                     Gas-Optimized Execution
                   </Text>
                   <Text
                     size="1"
                     style={{
                       color: theme.colors.text.secondary,
                     }}
                   >
                     Efficient layer-by-layer computation for cost-effective inference
                   </Text>
                 </Box>
              </Flex>
            </Flex>
          </Box>

          <Grid columns="2" gap="4">
            <Box
              style={{
                background: `linear-gradient(135deg, ${theme.colors.interactive.primary}10, ${theme.colors.interactive.primary}05)`,
                borderRadius: "20px",
                border: `1px solid ${theme.colors.interactive.primary}20`,
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <CubeIcon
                width="32"
                height="32"
                style={{
                  color: theme.colors.interactive.primary,
                  marginBottom: "16px",
                }}
              />
              <Text
                size="3"
                style={{
                  fontWeight: 700,
                  color: theme.colors.text.primary,
                  marginBottom: "8px",
                }}
              >
                Sui Network
                <br />
                <br />
                {/* <span style={{ 
                    background: `linear-gradient(135deg, ${theme.colors.interactive.accent}, ${theme.colors.status.success})`,
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                  }}>
                    Deep Neural Network Inference
                  </span> */}
              </Text>
                             <Text
                 size="1"
                 style={{
                   color: theme.colors.text.secondary,
                   lineHeight: "1.4",
                 }}
               >
               </Text>
            </Box>

                        <Box
              style={{
                background: `linear-gradient(135deg, ${theme.colors.interactive.accent}10, ${theme.colors.interactive.accent}05)`,
                borderRadius: "20px",
                border: `1px solid ${theme.colors.interactive.accent}20`,
                padding: "32px 24px",
                textAlign: "center",
              }}
            >
              <GearIcon
                width="32"
                height="32"
                style={{
                  color: theme.colors.interactive.accent,
                  marginBottom: "16px",
                }}
              />
              <Text
                size="3"
                style={{
                  fontWeight: 700,
                  color: theme.colors.text.primary,
                  marginBottom: "8px",
                }}
              >
                Scalable DNN Inference
                <br />
                <br />
              </Text>
              <Text
                size="1"
                style={{
                  color: theme.colors.text.secondary,
                  lineHeight: "1.4",
                }}
              >
                
              </Text>
            </Box>
          </Grid>
        </Grid>

        {/* Features - Compact Grid */}
        <Box
          style={{
            background: `linear-gradient(135deg, ${theme.colors.background.secondary} 0%, ${theme.colors.background.primary} 100%)`,
            borderRadius: "32px",
            border: `1px solid ${theme.colors.border.primary}`,
            padding: theme.spacing.base[8],
            position: "relative",
            overflow: "hidden",
          }}
        >
          <Box
            style={{
              position: "absolute",
              top: "-50%",
              right: "-20%",
              width: "400px",
              height: "400px",
              background: `radial-gradient(circle, ${theme.colors.interactive.primary}08, transparent 70%)`,
              borderRadius: "50%",
            }}
          />
          
          <Flex direction="column" align="center" gap="2" mb="8">
            <Heading
              size="6"
              style={{
                fontWeight: 700,
                color: theme.colors.text.primary,
                textAlign: "center",
                position: "relative",
                zIndex: 2,
              }}
            >
              Why Choose OpenGraph?
            </Heading>
            <Text
              size="3"
              style={{
                color: theme.colors.text.secondary,
                textAlign: "center",
                maxWidth: "600px",
                position: "relative",
                zIndex: 2,
              }}
            >
              The future of AI is transparent, verifiable, and decentralized
            </Text>
          </Flex>

          <Grid columns={{ initial: "1", sm: "2", lg: "4" }} gap="6" style={{ position: "relative", zIndex: 2 }}>
                         {[
               {
                 icon: <LightningBoltIcon width="20" height="20" />,
                 title: "Optimized DNN Execution",
                 description: "Efficient matrix operations and layer computations onchain"
               },
               {
                 icon: <CubeIcon width="20" height="20" />,
                 title: "Immutable Inference",
                 description: "Guaranteed deterministic results with blockchain consensus"
               },
                                {
                   icon: <Share1Icon width="20" height="20" />,
                   title: "Verifiable Models",
                   description: "Transparent weights, biases, and layer architectures onchain"
                 },
               {
                 icon: <CodeIcon width="20" height="20" />,
                 title: "DNN-First Design",
                 description: "Purpose-built for dense layers and feedforward networks"
               }
             ].map((feature, index) => (
              <Box
                key={index}
                style={{
                  background: theme.colors.background.card,
                  borderRadius: "20px",
                  border: `1px solid ${theme.colors.border.primary}`,
                  padding: "24px",
                  textAlign: "center",
                  transition: "all 0.3s ease",
                  backdropFilter: "blur(20px)",
                }}
                onMouseEnter={(e: any) => {
                  e.currentTarget.style.transform = "translateY(-4px)";
                  e.currentTarget.style.boxShadow = theme.shadows.semantic.card.medium;
                }}
                onMouseLeave={(e: any) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "none";
                }}
              >
                <Box
                  style={{
                    width: "48px",
                    height: "48px",
                    background: `${theme.colors.interactive.primary}15`,
                    borderRadius: "16px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    margin: "0 auto 16px",
                    color: theme.colors.interactive.primary,
                  }}
                >
                  {feature.icon}
                </Box>
                <Text
                  size="3"
                  style={{
                    fontWeight: 600,
                    color: theme.colors.text.primary,
                    marginBottom: "8px",
                  }}
                >
                  {feature.title}
                </Text>
                <Text
                  size="1"
                  style={{
                    color: theme.colors.text.secondary,
                    lineHeight: "1.5",
                  }}
                >
                  {feature.description}
                </Text>
              </Box>
            ))}
          </Grid>
        </Box>
      </Box>

      {/* CSS Animations */}
      <style>
        {`
          @keyframes float {
            0%, 100% { 
              transform: translateY(0px) rotate(0deg);
            }
            50% { 
              transform: translateY(-10px) rotate(5deg);
            }
          }
          
          @keyframes pulse {
            0%, 100% { 
              opacity: 1; 
            }
            50% { 
              opacity: 0.8; 
            }
          }
        `}
      </style>
    </Box>
  );
}

// Featured DNN models data
const featuredModels = [
  {
    id: "1",
    name: "MNIST Classifier",
    description: "Deep neural network for handwritten digit recognition with 784-128-64-10 architecture",
    task: "Classification",
    downloads: "8.2k",
    likes: "1.1k",
  },
  {
    id: "2", 
    name: "Iris Species Classifier",
    description: "Multi-layer perceptron for iris flower species classification",
    task: "Classification",
    downloads: "5.7k",
    likes: "743",
  },
  {
    id: "3",
    name: "Housing Price Predictor",
    description: "Deep feedforward network for real estate price prediction",
    task: "Regression", 
    downloads: "4.3k",
    likes: "567",
  },
  {
    id: "4",
    name: "Binary Sentiment Analyzer",
    description: "Dense neural network for positive/negative sentiment classification",
    task: "Classification",
    downloads: "6.9k",
    likes: "892", 
  },
];
