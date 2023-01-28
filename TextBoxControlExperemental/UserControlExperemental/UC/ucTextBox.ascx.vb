
Public Class ucTextBox
    Inherits System.Web.UI.UserControl

    Public Property Text() As String
        Get
            Return txtUC.Text
        End Get
        Set(value As String)
            txtUC.Text = value
        End Set
    End Property

    Public Property CssClass() As String
        Get
            Return txtUC.CssClass
        End Get
        Set(value As String)
            txtUC.Attributes.Remove("class")
            txtUC.Attributes.Add("class", "absolute transporentbackground " + value)

            divCloneTxt.Attributes.Remove("class")
            divCloneTxt.Attributes.Add("class", "absolute whitebackground whitefont " + value)
        End Set
    End Property

    Public Overrides Property ClientIDMode() As UI.ClientIDMode
        Get
            Return txtUC.ClientIDMode
        End Get
        Set(value As UI.ClientIDMode)
            txtUC.ClientIDMode = value
        End Set
    End Property


    Public WriteOnly Property onKeyUp() As String
        Set(value As String)
            txtUC.Attributes.Remove("onkeyup")
            txtUC.Attributes.Add("onkeyup", value)
        End Set
    End Property

    Public WriteOnly Property onblur() As String
        Set(value As String)
            txtUC.Attributes.Remove("onblur")
            txtUC.Attributes.Add("onblur", value)
        End Set
    End Property


    Public Property Width() As Unit
        Get
            Return txtUC.Width
        End Get
        Set(value As Unit)

            txtUC.Width = value
            divCloneTxt.Style.Remove("width")
            divCloneTxt.Style.Add("width", txtUC.Width.ToString)
        End Set
    End Property

    Public Property Height() As Unit
        Get
            Return txtUC.Height
        End Get
        Set(value As Unit)
            txtUC.Height = value
            divCloneTxt.Style.Remove("height")
            divCloneTxt.Style.Add("height", txtUC.Height.ToString)
        End Set
    End Property

    Private _MaxLength As Integer = 2000

    Public Property MaxLength() As Integer
        Get
            Return _MaxLength
        End Get
        Set(value As Integer)
            _MaxLength = value
            txtUC.MaxLength = value
        End Set
    End Property


    Public Property Rows() As Integer
        Get
            Return txtUC.Rows
        End Get
        Set(value As Integer)
            txtUC.Rows = value
        End Set
    End Property

    Public Property Font_Names() As String
        Get
            Return txtUC.Font.Name
        End Get
        Set(value As String)
            txtUC.Font.Name = value
            divCloneTxt.Style.Add("font-family", txtUC.Font.Names.ToString)
        End Set
    End Property


    Public Property Font_Size() As FontUnit
        Get
            Return txtUC.Font.Size
        End Get
        Set(value As FontUnit)
            txtUC.Font.Size = value
            divCloneTxt.Style.Add("font-size", txtUC.Font.Size.ToString)
        End Set
    End Property


    Public Property TextMode() As TextBoxMode
        Get
            Return txtUC.TextMode
        End Get
        Set(value As TextBoxMode)
            txtUC.TextMode = value
            'If (txtUC.TextMode = TextBoxMode.SingleLine) Then
            '    'divCloneTxt.Style.Remove("word-wrap")
            'Else
            '    'divCloneTxt.Style.Remove("word-wrap")
            '    ' divCloneTxt.Style.Add("word-wrap", "break-word")
            'End If
        End Set
    End Property

    Public Property AutoPostBack() As Boolean
        Get
            Return txtUC.AutoPostBack
        End Get
        Set(value As Boolean)
            txtUC.AutoPostBack = value
        End Set
    End Property



    Protected Sub Page_Load(ByVal sender As Object, ByVal e As System.EventArgs) Handles Me.Load

        If Not Page.IsPostBack Then

        End If

    End Sub



End Class

